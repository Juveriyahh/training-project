package com.mindsprint.restapi.controllers;

import com.mindsprint.restapi.models.Course;
import com.mindsprint.restapi.models.Product;
import com.mindsprint.restapi.models.User;
import com.mindsprint.restapi.service.CourseService;
import com.mindsprint.restapi.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin
public class CourseController {
    @Autowired
    private CourseService service;

    @PostMapping
    public ResponseEntity<Course> addCourse(@RequestBody Course course) {
        return new ResponseEntity<>(service.addCourse(course), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Course>> getAllCourse() {
        return ResponseEntity.ok(service.getAllCourse());
    }

    @GetMapping("{id}")
    public ResponseEntity<Object> getCourseById(@PathVariable Long id) {
        Course found = service.getCourseById(id);
        if (found != null)
            return ResponseEntity.ok(found);
        return new ResponseEntity<>("Course not found", HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Object> deleteCourseById(@PathVariable Long id) {
        if (service.deleteCourseById(id))
            return ResponseEntity.ok("Course deleted successfully");
        return new ResponseEntity<>("Course not found", HttpStatus.NOT_FOUND);
    }

    @PutMapping("{id}")
    public ResponseEntity<Object> UpdateById(@RequestBody Course course, @PathVariable Long id) {
        Course found = service.updateCourseById(id, course);
        if (found != null)
            return ResponseEntity.ok(found);
        return new ResponseEntity<>("Course not found", HttpStatus.NOT_FOUND);
    }
}
