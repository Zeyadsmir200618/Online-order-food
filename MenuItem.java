package com.example.demo.models;

import jakarta.persistence.*;

@Entity
@Table(name = "menu_items")
public class MenuItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String itemName;
    private double price;
    private String description;
}