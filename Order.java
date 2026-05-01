package com.example.demo.models;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double totalAmount;
    private String status; // e.g., "PENDING", "DELIVERED"
    private Date orderDate;

    @ManyToOne
    private User user; // This links the order to a specific User!
}