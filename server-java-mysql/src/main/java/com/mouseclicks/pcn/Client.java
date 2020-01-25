package com.mouseclicks.pcn;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "client_profile")
public class Client {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  private String First_Name;
  private String Last_Name;
  private String DOB;
  private String Phone_Number;
  private String Street_Address;
  private String City;
  private String State;
  private String Profile_Pic;
  
  
public Long getId() {
	return id;
}
public void setId(Long id) {
	this.id = id;
}
public String getFirst_Name() {
	return First_Name;
}
public void setFirst_Name(String first_Name) {
	First_Name = first_Name;
}
public String getLast_Name() {
	return Last_Name;
}
public void setLast_Name(String last_Name) {
	Last_Name = last_Name;
}
public String getDOB() {
	return DOB;
}
public void setDOB(String dOB) {
	DOB = dOB;
}
public String getPhone_Number() {
	return Phone_Number;
}
public void setPhone_Number(String phone_Number) {
	Phone_Number = phone_Number;
}
public String getStreet_Address() {
	return Street_Address;
}
public void setStreet_Address(String street_Address) {
	Street_Address = street_Address;
}
public String getCity() {
	return City;
}
public void setCity(String city) {
	City = city;
}
public String getState() {
	return State;
}
public void setState(String state) {
	State = state;
}
public String getProfile_Pic() {
	return Profile_Pic;
}
public void setProfile_Pic(String profile_Pic) {
	Profile_Pic = profile_Pic;
}


}


 