package com.mouseclicks.pcn;

import java.sql.Timestamp;
import javax.persistence.*;

@Entity
@Table(name = "provider_profile")
public class Provider {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer User_ID;
	private String First_name;
	private String Last_name;
	private String Office_Address;
	private String City;
	private String State;
	private String Phone_number;
	private String Email_Address;
	private String Deleted;

	public Integer getUser_ID() {
		return User_ID;
	}

	public void setUser_ID(Integer user_ID) {
		User_ID = user_ID;
	}

	public String getFirst_name() {
		return First_name;
	}

	public void setFirst_name(String first_name) {
		First_name = first_name;
	}

	public String getLast_name() {
		return Last_name;
	}

	public void setLast_name(String last_name) {
		Last_name = last_name;
	}

	public String getOffice_Address() {
		return Office_Address;
	}

	public void setOffice_Address(String office_Address) {
		Office_Address = office_Address;
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

	public String getPhone_number() {
		return Phone_number;
	}

	public void setPhone_number(String phone_number) {
		Phone_number = phone_number;
	}

	public String getDeleted() {
		return Deleted;
	}

	public void setDeleted(String deleted) {
		Deleted = deleted;
	}

	public Object getUsername() {
		// TODO Auto-generated method stub
		return null;
	}

	public Object getPassword() {
		// TODO Auto-generated method stub
		return null;
	}

	public String getEmail_Address() {
		return Email_Address;
	}

	public void setEmail_Address(String email_Address) {
		Email_Address = email_Address;
	}

}
