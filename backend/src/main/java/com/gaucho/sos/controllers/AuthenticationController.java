package com.gaucho.sos.controllers;

import com.gaucho.sos.domain.User;
import com.gaucho.sos.dtos.LoginRequestDTO;
import com.gaucho.sos.dtos.RegisterRequestDTO;
import com.gaucho.sos.dtos.AuthResponseDTO;
import com.gaucho.sos.repositories.UserRepository;
import com.gaucho.sos.security.services.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/authentication")
public class AuthenticationController {
    @Autowired
    private UserRepository repository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    JwtService jwtService;

    @PostMapping("/login")
    public ResponseEntity<AuthResponseDTO> login( @RequestBody LoginRequestDTO body ) {
        User user = repository.findByEmail( body.email() ).orElseThrow( () -> new RuntimeException( ( "User not found" ) ) );

        if ( passwordEncoder.matches( body.password(), user.getPassword() ) ) {
            return ResponseEntity.ok( new AuthResponseDTO( user.getName(), jwtService.generateToken( user ) ) );
        }

        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponseDTO> register( @RequestBody RegisterRequestDTO body ) {
        Optional<User> existentUser = this.repository.findByEmail( body.email() );

        if ( existentUser.isPresent() ) return ResponseEntity.badRequest().build();

        User user = new User();
        user.setName( body.name() );
        user.setEmail( body.email() );
        user.setPassword( passwordEncoder.encode( body.password() ) );

        repository.save( user );

        return ResponseEntity.ok( new AuthResponseDTO( user.getName(), jwtService.generateToken( user ) ) );
    }
}
