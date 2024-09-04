package com.mindsprint.restapi.service;

import com.mindsprint.restapi.models.Category;
import com.mindsprint.restapi.models.repo.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepo repo;
    public Category addCategory(Category category){
        return repo.save(category);
    }
    public List<Category> getAllCategory(){
        return repo.findAll();
    }

}
