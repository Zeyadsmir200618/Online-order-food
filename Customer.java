package com.example.demo.models;
import jakarta.persistence.Entity;

@Entity
public class Customer extends User {
    private String deliveryAddress;
    private String phoneNumber;
}