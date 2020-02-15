package com.mouseclicks.pcn;
import java.util.ArrayList;
// Group-dev code
import java.util.ArrayList;
import java.util.List;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;

import java.util.List;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping; 
import org.springframework.web.bind.annotation.RequestMapping;
import com.mouseclicks.pcn.Provider;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestParam;







@Controller


@RestController
@RequestMapping("/api/provider_profile")


	
 @GetMapping()
 public List<Provider> getProvider(){
	 List<Provider> foundProvider = dao.findAll();
	 return foundProvider;
 }
 @GetMapping("/provider/{id}")
 public ResponseEntity<Provider> getProvider(@PathVariable(value="id") Integer id) {
	 Provider foundProvider = dao.findById(id).orElse(null);
	if(foundProvider == null) {
		return ResponseEntity.notFound().header("Provider","Nothing was found with that id").build();
	}
	return ResponseEntity.ok(foundProvider);
 }
 }
 
 @PostMapping("/provider")
 public ResponseEntity <Provider> postProvider(@RequestBody Provider provider) {
	 Provider createdProvider = dao.save(provider);
	 return ResponseEntity.ok(createdProvider);
 }
 
 @DeleteMapping("/provider/{id}")
 public ResponseEntity<Provider> deleteProvider(@PathVariable(value="id")Integer id) {
	 Provider foundProvider = dao.findById(id).orElse(null);
 
 if(foundProvider == null) {
	 return ResponseEntity.notFound().header("Provider","Nothing found with that id").build();
	 
 } else {
	 dao.delete(foundProvider);
 }
	 return ResponseEntity.ok().build();
 }
 
 public String getAllProvider(Model model) {
	 List<Provider> provider = new ArrayList<Provider>();
	 Connection con;
	 try {
		 con = DriveManager.getConnection(url, username, password);
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
 
 
 }
 
 
}

