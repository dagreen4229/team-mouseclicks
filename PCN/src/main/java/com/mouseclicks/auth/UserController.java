package com.mouseclicks.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

  @Autowired
  private MySQLUserDetailsService userService;

  @PostMapping("/regiter/user")
  public void register(@RequestBody User newUser) {
    userService.Save(newUser);
  }

}