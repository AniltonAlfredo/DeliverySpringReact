package com.atma.atmadeliver.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import com.atma.atmadeliver.entidades.Order;




public interface OrderRepository extends JpaRepository<Order, Long> {
    
}
