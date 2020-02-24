package com.mouseclicks.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController

public class UserController {

  @Autowired
  private MySQLUserDetailsService userService;

  @PostMapping("/user/register")
  public void register(@RequestBody User newUser) {
    userService.Save(newUser);
  }
}