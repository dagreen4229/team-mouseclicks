package com.mouseclicks.pcn;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.sercurity.core.userdetails.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class MySQLUserDetailsService implements UserDetailsService {
	
	@Autowired
	private ProviderRepository providerRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public UserDetails loadUserByUsername(String username) {
		Provider provider = providerRepository.findByUsername(username);
		if(provider == null) {
			throw new UsernameNotFoundException(username);
		}
		return new org.springframework.security.core.userdetails.Provider
				(provider.getUsername(), provider.getPassword(), getAuthorities());
	}
	
	public UserDetails Save(Provider newProvider) {
		newProvider.setPassword(passwordEncoder.encode(newProvider.getPassword()));
		Provider savedProvider = providerRepository.save(newProvider);
		return new org.springframework.security.core.userdetails.Provider
				(saved.Provider.getUsername(), savedProvider.getPassword(), getAuthorities());
	}
	
	private List<SimpleGrantedAuthority>getAuthorities() {
		List<SimpleGrantedAuthority> authList = new ArrayList<>();
		authList.add(new SimpleGrantedAuthority("ROLE_PROVIDER"));
		return authList;
	}
}




