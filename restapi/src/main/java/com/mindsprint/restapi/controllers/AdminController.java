package com.mindsprint.restapi.controllers;


import com.mindsprint.restapi.models.Admin;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin
public class AdminController {
    //    @Autowired
//    Student student;
    private final String admin_email = "admin@gmail.com";
    private final String admin_password = "admin@123";

    @PostMapping("/login")
    public ResponseEntity<String> loginStudent(@RequestBody Admin admin) {
        if (admin_email.equals(admin.getEmail()) && admin_password.equals(admin.getPassword())) {
            return new ResponseEntity<>("Logged In", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Invalid Credentials", HttpStatus.NOT_FOUND);
        }
    }
}
