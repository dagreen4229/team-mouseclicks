package com.mouseclicks.provider;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


public interface ProviderRepository extends JpaRepository<Provider, Long> {
Provider findByUsername(String username);

Provider saveAll(Provider provider);

Optional<Provider> findById(Integer id);
}
	
 
