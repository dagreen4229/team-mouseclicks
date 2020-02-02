package com.mouseclicks.pcn;

// import java.util.UUID;

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
	private Integer id_client_user;
	private String city;
	private String dob;
	private String first_name;
	private String last_name;
	private String phone_number;
	private String profile_pic;
	private String state;
	private String street_address;

	public Integer getId_client_user() {
		return id_client_user;
	}

	public void setId_client_user(Integer id_client_user) {
		this.id_client_user = id_client_user;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
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

	public String getPhone_number() {
		return phone_number;
	}

	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}

	public String getProfile_pic() {
		return profile_pic;
	}

	public void setProfile_pic(String profile_pic) {
		this.profile_pic = profile_pic;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getStreet_address() {
		return street_address;
	}

	public void setStreet_address(String street_address) {
		this.street_address = street_address;
	}

package com.mouseclicks.pcn;
/*
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "task")
public class Client {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id_client_user;
  
  private String first_name;
  private String last_name;
  private String phone_number;
  private String street_address;
  private String city;
  private String state;
  private String age;
  private String gender;
  private String date_of_birth;
  
  @Column(columnDefinition = "boolean default false")
  private boolean complete;

  public Long getId() {
    return this.id_client_user;
  }

  public void setId(Long id) {
    this.id_client_user = id;
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
  
  public String getGender() {
	  return gender;
  }
  
  public void setGender( String gender) {
	  this.gender = gender;
  }
   public String getAge() {
	   return age;
   }
   
   public void setAge(String age) {
	   this.age =age;
   }
   
   public String getDate_of_birth() {
	   return date_of_birth;
   }
   
   public void setDate_of_birth( String date_of_date) {
	   this.date_of_birth = date_of_birth;
   }
  
  public boolean getComplete() {
	  
  
    return this.complete;
  }

  public void setComplete(boolean complete) {
    this.complete = complete;
  }

}
*/