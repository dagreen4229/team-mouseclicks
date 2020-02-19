package com.mouseclicks.auth;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class MySQLUserDetailsService implements UserDetailsService {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Override
  public UserDetails loadUserByUsername(String username) {
    User user = userRepository.findByUsername(username);
    if (user == null) {
      throw new UsernameNotFoundException(username);
    }
    return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), getAuthorities());
  }
  
  public ResponseEntity<User> findById(Integer id) {
	  User user = userRepository.findById(id).orElse(null);
	  if (user == null) {
		  return ResponseEntity.notFound().header("NotFound","No User found with that id").build();
	  }
	  return ResponseEntity.ok(user);
  }

  public UserDetails Save(User newUser) {
    newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
    User savedUser = userRepository.save(newUser);
    return new org.springframework.security.core.userdetails.User(savedUser.getUsername(), savedUser.getPassword(), getAuthorities());
  }

  private List<SimpleGrantedAuthority> getAuthorities() {
    List<SimpleGrantedAuthority> authList = new ArrayList<>();
    authList.add(new SimpleGrantedAuthority("ROLE_USER"));
    return authList;
  }

}