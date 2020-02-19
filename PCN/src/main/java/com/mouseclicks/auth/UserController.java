package com.mouseclicks.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
  @GetMapping("/pdashboard/{id}")
  public ResponseEntity<String> withUserId(@PathVariable String id) {
	  return ResponseEntity.ok(String.format(id));
	  
  }
}