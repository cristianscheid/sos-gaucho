package com.gaucho.sos.security.services;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.gaucho.sos.domain.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class JwtService {
    @Value("${api.security.token.key}")
    private String apiSecurityTokenKey;

    public String generateToken( User user ) {
        String token = null;

        try {
            token = JWT.create()
                        .withIssuer( "sos-gaucho-api" )
                        .withSubject( user.getEmail() )
                        .withExpiresAt( getExpireDate() )
                        .sign( getAlgorithm() );
        }
        catch ( JWTCreationException e ) {
            throw new RuntimeException( "Authentication error" );
        }

        return token;
    }

    public String validateToken( String token ) {
        String subject = null;

        try {
            return JWT.require( getAlgorithm() )
                        .withIssuer( "sos-gaucho-api" )
                        .build()
                        .verify( token )
                        .getSubject();
        }
        catch ( JWTVerificationException e ) {
            return null;
        }
    }

    public String extractToken( String authorizationHeader ) {
        if ( authorizationHeader == null ) return null;

        return authorizationHeader.replace( "Bearer ", "" );
    }

    public Algorithm getAlgorithm() {
        return Algorithm.HMAC256( apiSecurityTokenKey );
    }

    public Instant getExpireDate() {
        return LocalDateTime.now().plusHours( 2 ).toInstant( ZoneOffset.of("-3") );
    }
}
