package com.mouseclicks.pcn;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
User findByUsername(String username);

Optional<User> findById(Integer id);

Provider save(Provider provider);
	
}
