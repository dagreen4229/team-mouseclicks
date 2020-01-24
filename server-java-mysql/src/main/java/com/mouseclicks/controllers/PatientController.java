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

import com.mousclicks.models.Patient;
import com.mousclicks.models.PatientRepository;

@RestController
@RequestMapping("/tasks")
public class PatientController {

  @Autowired
  PatientRepository taskRepository;

  @GetMapping()
  public List<Patient> getTasks() {
    return taskRepository.findAll();
  }

  @PostMapping()
  public Patient addTask(@RequestBody Patient task) {
    return taskRepository.save(task);
  }

  @DeleteMapping("/{id}")
  public void deleteTask(@PathVariable Long id) {
    taskRepository.deleteById(id);
  }

  @PutMapping("/{id}")
  public Patient updateProject(@PathVariable Long id, @RequestBody Patient task) {
    Patient foundTask = taskRepository.findById(id).orElse(null);
    if (foundTask != null) {
    	foundTask.setName(task.getName());
    	foundTask.setComplete(task.getComplete());
      taskRepository.save(foundTask);
      return foundTask;
    }
    return null;
  }

}