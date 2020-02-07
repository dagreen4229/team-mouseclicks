package com.mouseclicks.pcn;

import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.*;
import javax.servlet.http.*;
import org.springframework.security.authentication.*;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

import static com.mouseclicks.pcn.AuthConstants.*;

public class JWTAuthorizationFilter extends BasicAuthenticationFilter {
	public JWTAuthorizationFilter(AuthenticationManager authenticationManager) {
	super(authenticationManager);	
	}
	
	@Override
	protected void doFilterinternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
	throws IOException, ServletException {
		String header = req.getHeader(HEADER_STRING);
		if ()
	}

}
