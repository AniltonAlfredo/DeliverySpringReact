package com.atma.atmadeliver.repositories;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.atma.atmadeliver.entidades.Product;


public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findAllByOrderByNameAsc();
    
}
