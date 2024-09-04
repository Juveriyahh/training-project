package com.mindsprint.restapi.service;

import com.mindsprint.restapi.models.Course;
import com.mindsprint.restapi.models.Student;
import com.mindsprint.restapi.models.repo.CourseRepo;
import com.mindsprint.restapi.models.repo.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class StudentService {
    @Autowired
    private StudentRepo repo;
    @Autowired
    private CourseRepo courseRepo;
    @PostMapping
    public Student addStudent(Student student){
        return repo.save(student);
    }
    @GetMapping
    public List<Student> getAllStudent(){
        return repo.findAll();
    }
    public Student updateCourseById(Long cid,Long sid){
        Student student=repo.findById(sid).orElse(null);
        if(student!=null) {
            Course course = courseRepo.findById(cid).orElse(null);
            Set<Course> set= student.getCourses();
            set.add(course);
            student.setCourses(set);
            return repo.save(student);
        }
        return null;
    }
    public  Student getStudentById(Long id){
        return repo.findById(id).orElse(null);
    }
    public Student login(Student student){
        Student existing=repo.findByEmail(student.getEmail());
        if(existing.getPassword().equals(student.getPassword())){
            return existing;
        }
        return null;
    }
}
