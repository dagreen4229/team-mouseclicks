package com.mouseclicks.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/register")
public class UserController {

  @Autowired
  private MySQLUserDetailsService userService;

  @PostMapping("/user")
  public void register(@RequestBody User newUser) {
    userService.Save(newUser);
  }
}