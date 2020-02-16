package com.mouseclicks.pcn;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.sql.ResultSet;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import com.mouseclicks.pcn.Provider;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.beans.factory.annotation.Autowired;






@SuppressWarnings("hiding")
@Controller


@RestController


@RequestMapping("/api/provider_profile")


	
 
 public class   ProviderController{
	@GetMapping("/")
	public String hetHomepage() {
		return "home";
	}
@GetMapping("/login")
public String getLoginPage() {
	return "login";
}
@GetMapping("/register")
public String getRegisterPage() {
	return "register";
}
@Autowired
UserRepository dao;

@GetMapping()
public List<User> getProvider() {
	List<User> foundUser = dao.findAll();
	return foundUser;
}

 
 @GetMapping("/provider/{id}")
 public ResponseEntity<User> getProvider(@PathVariable(value="id") Integer id) {
	 User foundProvider = dao.findById(id).orElse(null);
	if(foundProvider == null) {
		return ResponseEntity.notFound().header("Provider","Nothing was found with that id").build();
	}
	return ResponseEntity.ok(foundProvider);
 }
 
 
 @PostMapping("/provider")
 public ResponseEntity <Provider> postProvider(@RequestBody Provider provider) {
	 Provider createdProvider = dao.saveAll(provider);
	 return ResponseEntity.ok(createdProvider);
 }
 
 @DeleteMapping("/provider/{id}")
 public ResponseEntity<Provider> deleteProvider(@PathVariable(value="id")Integer id) {
	 User foundProvider = dao.findById(id).orElse(null);
 
 if(foundProvider == null) {
	 return ResponseEntity.notFound().header("Provider","Nothing found with that id").build();
	 
 } else {
	 dao.delete(foundProvider);
 }
	 return ResponseEntity.ok().build();
 }
 
 public String getAllProvider(Model model) {
	 ArrayList<Provider> provider = new ArrayList<Provider>();
	 Connection con;
	 try {
		 String url;
		String username;
		String password;
		con = DriverManager.getConnection(url, username, password);
		 Statement stmt = con.createStatement();
		 ResultSet rs = stmt.executeQuery("SELECT * FROM provider");
		 while (rs.next() ) {
			  
			  Provider newProvider = new Provider();
			  
			 newProvider.setProvider_id(rs.getInt("provider_id"));
			  newProvider.setFirst_name(rs.getString("first_name"));
			  newProvider.setLast_name(rs.getString("last_name"));
			  newProvider.setLast_update(rs.getTimestamp("last_update"));
			  
			  provider.add(newProvider);
		  }
		  } catch (SQLException e) {
			  e.printStackTrace();
		  }
		  
	 
	 model.addAttribute("provider", provider);
	 return "provider";
 }

 
 
 }
 
 


