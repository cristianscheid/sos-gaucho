package com.gaucho.sos.repositories;

import com.gaucho.sos.domain.Story;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface StoryRepository extends JpaRepository<Story, Integer> {
    Page<Story> findAll(Pageable pageable);
}
