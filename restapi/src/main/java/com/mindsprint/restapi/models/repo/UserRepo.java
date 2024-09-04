package com.mindsprint.restapi.models.repo;

import com.mindsprint.restapi.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Integer> {
}
