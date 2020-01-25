package com.mouseclicks.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mousclicks.models.Client;
import com.mousclicks.models.ClientRepository;

@RestController
@RequestMapping("/Clients")
public class ClientController {

  @Autowired
  ClientRepository clientRepository;

  @GetMapping()
  public List<Client> getClients() {
    return clientRepository.findAll();
  }

  @PostMapping()
  public Client addTask(@RequestBody Client client) {
    return clientRepository.save(client);
  }

  @DeleteMapping("/{id}")
  public void deleteTask(@PathVariable Long id) {
    clientRepository.deleteById(id);
  }

  @PutMapping("/{id}")
  public Client updateProject(@PathVariable Long id, @RequestBody Client client) {
    Client foundClient = clientRepository.findById(id).orElse(null);
    if (foundClient != null) {
    	foundClient.setName(client.getName());
    	foundClient.setComplete(client.getComplete());
      clientRepository.save(foundClient);
      return foundClient;
    }
    return null;
  }

}