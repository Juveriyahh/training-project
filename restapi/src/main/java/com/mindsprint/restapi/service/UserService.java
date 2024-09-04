package com.mindsprint.restapi.service;

import com.mindsprint.restapi.models.User;

import java.util.List;

public interface UserService {
    public User addUser(User user);
    public List<User> getAll();
    public User getUserById(int id);
    public  boolean deleteUser(int id);
    public User updateUserById(User user,int id);
}
