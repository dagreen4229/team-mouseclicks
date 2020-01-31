package com.mouseclicks.pcn;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/client")
public class ClientController {

	@Autowired
	ClientRepository clientRepository;

//I'm not even sure if we'll need a method to list all the profiles, so I'm just leaving this
//one commented out:

	@GetMapping("/profiles")
	public ResponseEntity<List<Client>> getClients() {
		return ResponseEntity.ok(clientRepository.findAll());
	}

	// Find client profiles by id.
	@GetMapping("/profile/{id}")
	public ResponseEntity<Client> getClient(@PathVariable(value = "id") Long id) {
		Client foundClient = clientRepository.findById(id).orElse(null);
		if (foundClient == null) {
			return ResponseEntity.notFound().header("NotFound", "No client found by that id").build();
		} else {
			return ResponseEntity.ok(foundClient);
		}

	}

	// Create client profiles.
	@PostMapping("/create")
	public ResponseEntity<Client> addClient(@RequestBody Client client) {
		// Code to eventually add UUID's, it's just a stretch goal for now.

		// UUID uuid = UUID.randomUUID();
		// client.setId(uuid);

		return ResponseEntity.ok(clientRepository.save(client));
	}

	// Update client profiles.
	@PutMapping("/post/{id}")
	public ResponseEntity<Client> updatePost(@RequestBody Client client, @PathVariable(value = "id") Long id) {
		Client foundClient = clientRepository.findById(id).orElse(null);
		if (foundClient == null) {
			return ResponseEntity.notFound().header("Client", "No clients found with that id").build();
		} else {
			return ResponseEntity.ok(clientRepository.save(client));
		}

	}

	// Delete client profiles.
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Client> deleteClient(@RequestBody Client client, @PathVariable(value = "id") Long id) {
		Client foundClient = clientRepository.findById(id).orElse(null);
		if (foundClient == null) {
			return ResponseEntity.notFound().header("Client", "No clients found with that id").build();
		} else {
			clientRepository.delete(client);
			return ResponseEntity.ok().build();
		}

	}

}