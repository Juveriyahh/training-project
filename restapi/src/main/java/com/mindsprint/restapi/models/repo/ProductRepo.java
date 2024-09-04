package com.mindsprint.restapi.models.repo;

import com.mindsprint.restapi.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository<Product,Integer> {
}
