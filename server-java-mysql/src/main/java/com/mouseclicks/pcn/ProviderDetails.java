package com.mouseclicks.pcn;

import java.util.ArrayList;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;


import org.springframework.security.core.userdetails.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service

public class ProviderDetails implements UserDetailsService {
	
@Autowired
private ProviderRepository providerRepository;

@Autowired
private PasswordEncoder passwordEncoder;

@Overrride
public ProviderDetails 
loadUserByUsername(String username)
{
Provider provider = ProviderRepository.findByUsername(username);
if (provider == null) {
	throw new UsernameNotFoundException(username);
}
 return new org.springframework.security.core.providerdetails.Provider(savedUser.getUsername(), savedProvider.getPassword(), getAuthorites());
 
}
 private List<SimpleGrantedAuthority> getAuthorities() {
	 List<SimpleGrantedAuthority> authList = new ArrayList<>();
	 authList.add(new SimplegrantedAuthority("ROLE PROVIDER"));
	 return authList;
 }
}
