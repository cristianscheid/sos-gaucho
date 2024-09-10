package com.gaucho.sos.security.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Value("${api.url}")
    private String apiUrl;

    @Override
    public void addCorsMappings( CorsRegistry registry ) {
        registry.addMapping( "/**" ).allowedOrigins( apiUrl ).allowedMethods( HttpMethod.GET.name(),
                                                                                        HttpMethod.POST.name(),
                                                                                        HttpMethod.DELETE.name(),
                                                                                        HttpMethod.PUT.name() );
    }
}
