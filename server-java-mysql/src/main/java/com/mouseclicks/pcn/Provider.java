package com.mouseclicks.pcn;

/* Springs code
 import java.sql.Timestamp;
 import javax.persistence.*;
*/ 
 @Entity
 @Table(name="provider")
 
 
import java.sql.Timestamp;
import javax.persistence.*;
 

 @Entity
public class Provider {
	 @Id
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 
	 //change name to what? if not id? 
	 private Long id;
	 
	 @Column(nullable = false, unique = true)
	 private String username;
	 
	 private String password;
	 
	 public Long getId() {
		 return id;
	 }
	 
	 public void setId(Long id) {
		 this.id = id;
	 }
	 
	 public String getUsername() {
		 return username;
	 }
	 
	 public void setUsername (String username) {
		 this.username = username;
	 }
	 
	 public String getPassword() {
		 return password;
	 }
	 
	 public void setPassword(String password) {
		 this.password = password;
		 
	 }
 }
	 
/*	 @GeneratedValue(strategy = GenerationType.AUTO)
	 
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Integer id;
	 private String name;
	 private String content;
	 
	 
	 public Integer getId() {
		 return id;
	 }
	 public void setId(Long id) {
	 public void setId(Integer id) {
		 this.id = id;
	 }
	 
	 public String getName() {
		 return name;
	 }
	 
	 public void setName(String name) {
		 this.name = name;
		 this.first_name = name;
	 }
	 
	 public String getContent() {
		 return content;
	 }
	 
	 public void setContent(String content) {
		 this.content = content;
	 }
	 
	 
	 
	 
	 
 private int provider_id;
 private String first_name;
 private String last_name;
 private Timestamp last_update;


public int getProvider() {
	return provider_id;
   }


public void setProvider(int provider_id) 
{
     this.provider_id = provider_id;
     }


public String getFirst_name() 
{
       return first_name;
      }


public void setFirst_name(String first_name) 
{
	this.first_name = first_name;
    }


public String getLast_name() 
{
	return last_name;
   }


public void setLast_name(String last_name) 
{
	this.last_name = last_name;
   }


public Timestamp getLast_update() 
{
	return last_update;
   }


public void setLast_update(Timestamp last_update) 
{
	this.last_update = last_update;
   }
}*/
