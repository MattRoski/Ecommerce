package com.mattroski.ecommerce.dao;

import com.mattroski.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200") //accept calls from web browser scripts for this origin. Common mistake for CORS error
//Origin is: protocol + hostname + port
public interface ProductRepository extends JpaRepository<Product, Long> {
}
