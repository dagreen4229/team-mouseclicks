package com.mouseclicks.pcn.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "task")
public class Patient {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  
  private String first_name;
  private String last_name;
  private String date_of_birth;
  private String phone_number;
  private String street_address;
  private String city;
  private String state;
  @Column(columnDefinition = "boolean default false")
  private boolean complete;

  public Long getId() {
    return this.id;
  }

  public void setId(Long id) {
    this.id = id;
  }
public String getFirst_name() {
	return first_name;
}

public void setFirst_name(String first_name) {
	this.first_name = first_name;
}

public String getLast_name() {
	return last_name;
}

public void setLast_name(String last_name) {
	this.last_name = last_name;
}

  public String getDate_of_birth() {
	  return date_of_birth;
  }
  
  public void setDate_of_birth(String date_of_birth) {
	  this.date_of_birth = date_of_birth;
  }
  
  public String getPhone_number() {
	  return phone_number;
  }

  public void setPhone_number(String phone_number) {
	  this.phone_number = phone_number;
  }
  
  public String getStreet_address() {
	  return street_address;
  }
  
  public void setStreet_address(String street_address) {
	  this.street_address = street_address;
  }
  public String getCity() {
	  return city;
  }
  public void setCity (String city) {
	  this.city = city;
  }
  
  public String getState() {
	  return state;
  }
  
  public void setState(String state) {
	  this.state = state;
  }
  public boolean getComplete() {
    return this.complete;
  }

  public void setComplete(boolean complete) {
    this.complete = complete;
  }

}