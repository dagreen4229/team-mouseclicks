package com.mouseclicks.pcn;

import static com.auth0.jwt.algorithms.Algorithm.HMAC512;
import static com.mouseclicks.pcn.AuthConstants.EXPIRATION_TIME;
import static com.mouseclicks.pcn.AuthConstants.HEADER_STRING;
import static com.mouseclicks.pcn.AuthConstants.TOKEN_PREFIX;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.auth0.jwt.JWT;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
	 private AuthenticationManager authenticationManager;
	 
	 public JWTAuthenticationFilter(AuthenticationManager authenticationManager) {
		 this.authenticationManager = authenticationManager;
	 }
	 @Override 
	 public Authentication attemptAuthentication(HttpServletRequest req, httpServletResponse res)
	 throws AuthenticationException {
		 try {
			 com.mouseclicks.pcn.Provider creds = new ObjectMappeer()
					 .readValue(req.getInputStream(), com.mouseclicks.pcn.User.class);
			 
			 return authenticationManager.authenticate(
					 new UsernamePasswordAuthticationToken(
							 creds.getUsername(),
							 creds.getPassword(),
							 new ArrayList<>())
					 );
		 } catch (IOException e) {
			 throw new RuntimeException(e);
		 }
	 }
	 @Override
	 protected void succesfulAuthentication(HttpServletRequest req, HttpServletResponse rex, FilterChain chain, Authentication auth)
	 throws IOException, ServletException {
		 String token = JWT.create()
				 .withSubject((User) auth.getPrincipal()).getUsername())
                 .withExpiresAt( new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                 .sign(HMAC512(SECRET.getBytes()));
                 res.addHeader(HEADER_STRING, TOKEN_PREFIX + token);
                 
	 }
	 @Override
	 protected void unsuccessfulAuthentication(HttpServletRequest req, HttpServletResponse res, AuthenticationException failed)
	 throws IOException, ServletException {
		 super.unsuccessfulAuthentication(req, res, failed);
	 }
	 
	  } 




