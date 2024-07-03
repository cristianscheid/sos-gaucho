package com.gaucho.sos.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StoriesController {

    //create a mappings for "/stories"
    @GetMapping("/stories")
    public String getStories() {
        return "stories";
    }
}
