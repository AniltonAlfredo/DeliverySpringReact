package com.atma.atmadeliver.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.atma.atmadeliver.repositories.OrderRepository;
import com.atma.atmadeliver.repositories.ProductRepository;
import com.atma.atmadeliver.dto.OrderDTO;
import com.atma.atmadeliver.dto.ProductDTO;
import com.atma.atmadeliver.entidades.Order;
import com.atma.atmadeliver.entidades.OrderStatus;
import com.atma.atmadeliver.entidades.Product;


@Service
public class OrderService {

    @Autowired
    private OrderRepository repository;

    @Autowired
    private ProductRepository productRepository;

    @Transactional(readOnly = true)
    public List<OrderDTO> 
    findAll(){
        // List<Order> list = repository.findAll();
        List<Order> list = repository.findOrdersWithProducts();
        return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
    }

    @Transactional
    public OrderDTO insert(OrderDTO dto){
        Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(), Instant.now(), OrderStatus.PENDING );

        for (ProductDTO p : dto.getProducts()){
            Product product = productRepository.getReferenceById(p.getId());
            order.getProducts().add(product);
        }

        order = repository.save(order);
        return new OrderDTO(order);
    } 
    
    @Transactional
    public OrderDTO setDelivered(Long id){
        Order order = repository.getReferenceById(id);
        order.setStatus(OrderStatus.DELIVERED);
        order = repository.save(order);
        return new OrderDTO(order);
    }


}