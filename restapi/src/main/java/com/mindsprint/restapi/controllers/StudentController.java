package com.mindsprint.restapi.controllers;

import com.mindsprint.restapi.models.Product;
import com.mindsprint.restapi.models.Student;
import com.mindsprint.restapi.service.ProductService;
import com.mindsprint.restapi.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/student")
@CrossOrigin
public class StudentController {
    @Autowired
    StudentService service;
    @PostMapping
    public ResponseEntity<Student> addStudent(@RequestBody Student student){
        return new ResponseEntity<>(service.addStudent(student), HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public ResponseEntity<Object> getStudentById(@PathVariable Long id){
        Student found=service.getStudentById(id);
        if(found!=null)
            return ResponseEntity.ok(found);
        return new ResponseEntity<>("Student not found", HttpStatus.NOT_FOUND);
    }
    @GetMapping
    public ResponseEntity<List<Student>> getAllStudents(){
        return ResponseEntity.ok(service.getAllStudent());
    }
    @GetMapping("/add/{sid}/courses/{cid}")
    public ResponseEntity<Student> registerCourse(@PathVariable Long sid,@PathVariable Long cid){
        return new ResponseEntity<>(service.updateCourseById(cid,sid),HttpStatus.OK);
    }
    @PostMapping("/login")
    public ResponseEntity<Student> loginStudent(@RequestBody Student student){
        Student student1=service.login(student);
        if(student1!=null)
        return ResponseEntity.ok(student1);
        else
            return new ResponseEntity<>(service.login(student),HttpStatus.NOT_FOUND);
    }
}
