package com.example.demo.factories;

import com.example.demo.models.User;
import com.example.demo.models.Customer;
import com.example.demo.models.Admin;

public class UserFactory {
    public static User createUser(String type) {
        if (type == null) return null;
        
        if (type.equalsIgnoreCase("CUSTOMER")) {
            return new Customer();
        } else if (type.equalsIgnoreCase("ADMIN")) {
            return new Admin();
        }
        return new User();
    }
}