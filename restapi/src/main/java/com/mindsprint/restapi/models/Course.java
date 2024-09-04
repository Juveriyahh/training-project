package com.mindsprint.restapi.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;
@Data
@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    @Column(columnDefinition = "TEXT")
    private String description;
    private double price;
    private String instructor;
    private double duration;
    @Column(columnDefinition = "TEXT")
    private String image;
    @JsonIgnore
    @ManyToMany(mappedBy = "courses")
    private Set<Student> students=new HashSet<>();


}
