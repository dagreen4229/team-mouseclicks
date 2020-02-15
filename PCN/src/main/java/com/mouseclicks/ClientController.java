package com.mouseclicks;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/client")
public class ClientController {
	
	@Autowired
	ClientRepository repo;

	@GetMapping("/profiles")
	public ResponseEntity<List<Client>> getClients() {
		return ResponseEntity.ok(repo.findAll());
	}
	
	@PostMapping("/create")
	public ResponseEntity<Client> addClient(@RequestBody Client client) {
		return ResponseEntity.ok(repo.save(client));
	}
}
