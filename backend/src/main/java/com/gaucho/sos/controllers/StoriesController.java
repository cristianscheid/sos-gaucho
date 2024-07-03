package com.gaucho.sos.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StoriesController {

    //create a mapping for "/"
    
    @GetMapping("/")
    public String getStories() {
        return "stories";
    }
}
