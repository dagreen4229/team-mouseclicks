package com.mouseclicks;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	@GetMapping("/{id}")
    public ResponseEntity<Client> getMessage(@PathVariable("id") Long id) {
        Client foundClient = repo.findById(id).orElse(null);

        if(foundClient == null) {
            return ResponseEntity.notFound().header("Client","No Client found with that id").build();
        }
        return ResponseEntity.ok(foundClient);
    }
}
