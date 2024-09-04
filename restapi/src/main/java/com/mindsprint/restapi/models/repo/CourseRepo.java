package com.mindsprint.restapi.models.repo;

import com.mindsprint.restapi.models.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepo extends JpaRepository<Course,Long> {
}
