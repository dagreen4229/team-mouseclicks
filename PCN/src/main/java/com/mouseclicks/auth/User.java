package com.mouseclicks.auth;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class User {

	private @Id @GeneratedValue(strategy = GenerationType.AUTO) Integer ID;
	private @Column(name = "username", nullable = false, unique = true) String username;
	private String password;
	private String Email_Address;
	private boolean Provider;
	private boolean Admin;
	private boolean Deleted;
	private String token;

	public Integer getID() {
		return ID;
	}

	public void setID(Integer id) {
		ID = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail_Address() {
		return Email_Address;
	}

	public void setEmail_Address(String email_Address) {
		Email_Address = email_Address;
	}

	public boolean isProvider() {
		return Provider;
	}

	public void setProvider(boolean provider) {
		Provider = provider;
	}

	public boolean isAdmin() {
		return Admin;
	}

	public void setAdmin(boolean admin) {
		Admin = admin;
	}

	public boolean isDeleted() {
		return Deleted;
	}

	public void setDeleted(boolean deleted) {
		Deleted = deleted;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

}