package com.mouseclicks.auth;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClientController {

    
    @Autowired
    ClientRepository dao;


    
    @GetMapping("/chat")
    public List<Client> getClient() {
        List<Client> foundClient = dao.findAll();
        return foundClient;
    }

    @GetMapping("/chat/{id}")
    public ResponseEntity<Client> getClient(@PathVariable("id") Integer id) {
        client foundClient = dao.findById(id).orElse(null);

        if(foundClient == null) {
            return ResponseEntity.notFound().header("Client","Nothing found with that id").build();
        }
        return ResponseEntity.ok(foundClient);
    }

    @PostMapping("/chat")
    public ResponseEntity<Client> postClient(@RequestBody Client client) {

        
        Message createdClient = dao.save(client);

      
        return ResponseEntity.ok(createdClient);
    }

    @DeleteMapping("/chat/{id}")
    public ResponseEntity<Client> deleteClient(@PathVariable(value="id") Integer id) {
        Client foundClient = dao.findById(id).orElse(null);
//not sure if we need this
        if(foundClient == null) {
            return ResponseEntity.notFound().header("Client","Nothing found with that id").build();
        }else {
            dao.delete(foundClient);
        }
        return ResponseEntity.ok().build();
    }
}


