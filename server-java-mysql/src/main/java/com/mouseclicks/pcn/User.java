package com.mouseclicks.pcn;

import javax.persistence.*;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long User_ID;
	
	@Column(nullable = false, unique = true)
	private String Username;
	private String Email_Address;
	private String Admin;
	private String Deleted;
	private String token;
	
	private String Password;
	
	public Long getUser_ID() {
		return User_ID;
	}
	
	public void setId(Long User_ID) {
		this.User_ID = User_ID;
	}
	

	public String getUsername() {
		
	return Username;
	}
	
	public void setUsername(String Username) {
		this.Username = Username;
	}

	public String getPassword() {
		return Password;
	}
	public void setPassword(String Password) {
		this.Password = Password;
	}

}
