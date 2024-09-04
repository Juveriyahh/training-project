package com.mindsprint.restapi.models.repo;

import com.mindsprint.restapi.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends JpaRepository<Student,Long> {
    public Student findByEmail(String email);
}
