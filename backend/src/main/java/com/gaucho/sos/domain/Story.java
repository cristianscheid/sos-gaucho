package com.gaucho.sos.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "stories")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Story {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(nullable = false, name = "user_id")
    private User user;

    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String shortDescription;
    @Column(nullable = false)
    private String longDescription;
    @Column(nullable = false)
    private String helpNeeded;
    @Column(nullable = false)
    private String postalCode;
    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private LocalDateTime createdAt;
}
