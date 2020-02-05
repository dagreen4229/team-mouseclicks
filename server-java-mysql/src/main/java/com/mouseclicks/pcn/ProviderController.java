package com.mouseclicks.pcn;

import java.util.ArrayList;
import java.util.List;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/provider_profile")
public class ProviderController {

@GetMapping()
public ResponseEntity<List<String>> 
getProvider_profile() {
	
List<String> provider_profile = 
new ArrayList<String>();
return ResponseEntity.ok(provider_profile);
	}
}
