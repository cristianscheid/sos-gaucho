package com.gaucho.sos.dtos;

import java.time.LocalDateTime;
import java.util.List;

public record StoryResponseDTO(
                int id,
                String title,
                String shortDescription,
                String longDescription,
                String benefitedName,
                String contact,
                String helpNeeded,
                String city,
                LocalDateTime createdAt,
                List<String> images) {
}
