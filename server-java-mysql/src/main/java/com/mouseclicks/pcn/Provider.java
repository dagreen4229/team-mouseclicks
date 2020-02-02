package com.mouseclicks.pcn;
 import java.sql.Timestamp;
 
public class Provider {
 private int provider_id;
 private String first_name;
 private String last_name;
 private Timestamp last_update;


public int getProvider() {
	return provider_id;
}
public void setProvider(int provider_id) {
	this.provider_id = provider_id;
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
public Timestamp getLast_update() {
	return last_update;
}
public void setLast_update(Timestamp last_update) {
	this.last_update = last_update;
}
}
