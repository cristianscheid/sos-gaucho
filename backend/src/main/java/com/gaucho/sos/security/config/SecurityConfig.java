package com.gaucho.sos.security.config;

import com.gaucho.sos.security.filters.SecurityRequestFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    SecurityRequestFilter securityFilter;

    @Bean
    public SecurityFilterChain securityFilterChain( HttpSecurity httpSecurity ) throws Exception {
        httpSecurity.csrf( csrf -> csrf.disable() )
                    .sessionManagement( session -> session.sessionCreationPolicy( SessionCreationPolicy.STATELESS ) )
                    .authorizeHttpRequests( authorize -> authorize.requestMatchers( HttpMethod.POST, "/authentication/login" ).permitAll()
                                                                    .requestMatchers( HttpMethod.POST, "/authentication/register" ).permitAll()
                                                                    .requestMatchers(HttpMethod.GET, "/stories").permitAll()
                                                                    .requestMatchers(HttpMethod.GET, "/stories/{id}").permitAll()
                                                                    .anyRequest().authenticated() )
                    .addFilterBefore( securityFilter, UsernamePasswordAuthenticationFilter.class );

        return httpSecurity.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager( AuthenticationConfiguration authenticationConfiguration ) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
}