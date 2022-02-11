package com.examly.springapp.controller;

import com.examly.springapp.model.UserModel;
import com.examly.springapp.service.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/")
public class AuthController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<UserModel> getAllUsers(){
        return userService.getAllUsers();
    }

    @PostMapping("/signup")
    public boolean addUser(@RequestBody UserModel user){
        return userService.addUser(user);
    }

    @PostMapping("/login")
    public boolean findUser(@RequestBody UserModel user){
        return userService.findUser(user);
    }


}
