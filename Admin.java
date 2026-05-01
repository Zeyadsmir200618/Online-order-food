package com.example.demo.models;
import jakarta.persistence.Entity;

@Entity
public class Admin extends User {
    private String adminLevel; // e.g., "SuperAdmin"
}