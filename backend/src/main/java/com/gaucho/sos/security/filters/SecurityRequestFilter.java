package com.gaucho.sos.security.filters;

import com.gaucho.sos.domain.User;
import com.gaucho.sos.repositories.UserRepository;
import com.gaucho.sos.security.services.JwtService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.ArrayList;

@Component
public class SecurityRequestFilter extends OncePerRequestFilter {

    @Autowired
    private JwtService jwtService;
    @Autowired
    private UserRepository userRepository;

    @Override
    protected void doFilterInternal( HttpServletRequest request, HttpServletResponse response, FilterChain filterChain ) throws ServletException, IOException {
        String token        = jwtService.extractToken( request.getHeader( "Authorization" ) );
        String userEmail    = jwtService.validateToken( token );

        if ( userEmail != null ) {
            User user = userRepository.findByEmail( userEmail ).orElseThrow( () -> new RuntimeException( "User not found!" ) );

            UsernamePasswordAuthenticationToken credentialsToken = getUsernamePasswordAuthenticationToken( user );

            credentialsToken.setDetails( new WebAuthenticationDetailsSource().buildDetails( request ) );

            SecurityContextHolder.getContext().setAuthentication( credentialsToken );
        }

        filterChain.doFilter( request, response );
    }

    private static UsernamePasswordAuthenticationToken getUsernamePasswordAuthenticationToken( User user ) {
        UserDetails userDetails = new org.springframework.security.core.userdetails.User( user.getEmail(), user.getPassword(), new ArrayList() );

        return new UsernamePasswordAuthenticationToken( userDetails,null, userDetails.getAuthorities() );
    }
}
