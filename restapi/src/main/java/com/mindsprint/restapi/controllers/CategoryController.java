package com.mindsprint.restapi.controllers;

import com.mindsprint.restapi.models.Category;
import com.mindsprint.restapi.models.Product;
import com.mindsprint.restapi.service.CategoryService;
import com.mindsprint.restapi.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/category")
@CrossOrigin
public class CategoryController {
    @Autowired
    CategoryService service;
    @PostMapping
    public ResponseEntity<Category> addCategory(@RequestBody Category category){
        return new ResponseEntity<>(service.addCategory(category), HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<Category>> getAllCategory(){
        return ResponseEntity.ok(service.getAllCategory());
    }
}
