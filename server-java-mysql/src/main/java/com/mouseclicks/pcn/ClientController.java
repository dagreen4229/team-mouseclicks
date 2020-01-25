package com.mouseclicks.pcn;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ClientController {

  @Autowired
  ClientRepository clientRepository;

  
//  @GetMapping("/")
//  public List<Client> getClients() { 
//    return clientRepository.findAll();
//  }

	@GetMapping("/test")
	public ResponseEntity<List<Client>> getPosts(){
		List<Client> results = clientRepository.findAll();
		return ResponseEntity.ok(results);
	}

}