package com.mouseclicks.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

  @Autowired
  private MySQLUserDetailsService userService;

  @PostMapping("/register/user")
  public void register(@RequestBody User newUser) {
    userService.Save(newUser);
  }
  
  @GetMapping("/user/{username}")
  public UserDetails getUserDetails(@PathVariable("username")String username) {
	  return userService.loadUserByUsername(username);
  }
  

}