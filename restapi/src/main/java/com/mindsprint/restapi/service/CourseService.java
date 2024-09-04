package com.mindsprint.restapi.service;

import com.mindsprint.restapi.models.Course;
import com.mindsprint.restapi.models.repo.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Service
public class CourseService {
    @Autowired
    private CourseRepo repo;
    @PostMapping
    public Course addCourse(Course course){
        return repo.save(course);
    }
    @GetMapping
    public List<Course> getAllCourse(){
        return repo.findAll();
    }
    @PutMapping("/{id}")
    public Course updateCourseById(@PathVariable Long id, @RequestBody Course course){
        Course oldCourse = getCourseById(id);
        if(oldCourse!=null) {
            oldCourse.setTitle(course.getTitle());
            oldCourse.setDescription(course.getDescription());
            oldCourse.setDuration(course.getDuration());
            oldCourse.setPrice(course.getPrice());
            oldCourse.setInstructor(course.getInstructor());
            oldCourse.setImage(course.getImage());
            return repo.save(oldCourse);
        }
        return null;
    }
    @DeleteMapping("/{id}")
    public boolean deleteCourseById(@PathVariable Long id){
        if(getCourseById(id)!=null) {
            repo.deleteById(id);
            return true;
        }
        return false;
    }
    @GetMapping("/{id}")
    public Course getCourseById(@PathVariable Long id){
        return repo.findById(id).orElse(null);
    }
}
