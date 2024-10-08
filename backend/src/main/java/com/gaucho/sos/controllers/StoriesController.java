package com.gaucho.sos.controllers;

import com.gaucho.sos.domain.Story;
import com.gaucho.sos.dtos.StoryResponseDTO;
import com.gaucho.sos.repositories.StoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.stream.Collectors;

@RestController
public class StoriesController {

    @Autowired
    private StoryRepository storyRepository;

    private String getImageBasePath() {
        return ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/uploads/images/stories/")
                .toUriString();
    }

    @GetMapping("/stories")
    public ResponseEntity<Page<StoryResponseDTO>> getStories(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "createdAt") String sortBy,
            @RequestParam(defaultValue = "desc") String sortOrder) {

        Sort.Direction direction = sortOrder.equalsIgnoreCase("asc") ? Sort.Direction.ASC : Sort.Direction.DESC;
        Pageable pageable = PageRequest.of(page, size, direction, sortBy);
        Page<Story> stories = storyRepository.findAll(pageable);

        String imageBasePath = getImageBasePath();

        Page<StoryResponseDTO> storyDtos = stories.map(story -> new StoryResponseDTO(
                story.getId(),
                story.getTitle(),
                story.getShortDescription(),
                story.getLongDescription(),
                story.getBenefitedName(),
                story.getContact(),
                story.getHelpNeeded(),
                story.getCity(),
                story.getCreatedAt(),
                story.getImages().stream().map(image -> imageBasePath + story.getId() + "/" + image.getPath()).collect(Collectors.toList())));

        return ResponseEntity.ok(storyDtos);
    }

    @GetMapping("/stories/{id}")
    public ResponseEntity<StoryResponseDTO> getStoryById(@PathVariable int id) {
        String imageBasePath = getImageBasePath();

        return storyRepository.findById(id)
                .map(story -> new StoryResponseDTO(
                        story.getId(),
                        story.getTitle(),
                        story.getShortDescription(),
                        story.getLongDescription(),
                        story.getBenefitedName(),
                        story.getContact(),
                        story.getHelpNeeded(),
                        story.getCity(),
                        story.getCreatedAt(),
                        story.getImages().stream().map(image -> imageBasePath + story.getId() + "/" + image.getPath())
                                .collect(Collectors.toList())))
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
