package com.mindsprint.restapi.models.repo;

import com.mindsprint.restapi.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepo extends JpaRepository<Category,Integer> {
}
