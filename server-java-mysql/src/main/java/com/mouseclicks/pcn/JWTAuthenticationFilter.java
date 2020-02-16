package com.mouseclicks.pcn;

import static com.auth0.jwt.algorithms.Algorithm.HMAC512;
import static com.mouseclicks.pcn.AuthConstants.EXPIRATION_TIME;
import static com.mouseclicks.pcn.AuthConstants.HEADER_STRING;
import static com.mouseclicks.pcn.AuthConstants.TOKEN_PREFIX;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

import javax.crypto.SecretKey;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
	private AuthenticationManager authenticationManager;

	public JWTAuthenticationFilter(AuthenticationManager authenticationManager) {
		this.authenticationManager = authenticationManager;
	}

	@Override
	public Authentication attemptAuthentication(HttpServletRequest req, HttpServletResponse res)
			throws AuthenticationException {
		try {
			com.mouseclicks.pcn.User creds = new ObjectMapper().readValue(req.getInputStream(),com.mouseclicks.pcn.User.class);

			return authenticationManager
					.authenticate((Authentication) new UsernamePasswordAuthenticationToken(creds.getUsername(),
							creds.getPassword(), new ArrayList<>()));
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}

	protected void succesfulAuthentication(HttpServletRequest req, HttpServletResponse res, FilterChain chain, Authentication auth)
	 throws IOException, ServletException {
		 String token = JWT.create().withSubject(((User) auth.getPrincipal()).getUsername())
                 .withExpiresAt( new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                 .sign(HMAC512(SecretKey.getBytes()));
                 res.addHeader(HEADER_STRING, TOKEN_PREFIX + token);
                 
	 }

	@Override
	protected void unsuccessfulAuthentication(HttpServletRequest req, HttpServletResponse res,
			AuthenticationException failed) throws IOException, ServletException {
		super.unsuccessfulAuthentication(req, res, failed);
	}

}
