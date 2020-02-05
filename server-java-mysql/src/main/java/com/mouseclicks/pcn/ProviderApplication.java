package com.mouseclicks.pcn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

@ServletComponentScan
@SpringBootApplication
public class ProviderApplication  extends PatientCareNetwork{

	public static void main(String[] args) {
		SpringApplication.run(PatientCareNetwork.class, args);
	}
	//@Bean
	
}
