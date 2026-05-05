package com.example.demo.controllers;

import com.example.demo.models.User;
import com.example.demo.repositories.RestaurantRepository;
import com.example.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class WebController {

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private UserRepository userRepository;

    // --- 1. AUTHENTICATION FLOW ---

    // The Login Page
    @GetMapping("/login")
    public String loginPage() {
        return "login";
    }

    // The Massive 4K Sign-Up Page
    @GetMapping("/signup")
    public String signUpPage() {
        return "signup";
    }

    // Handing the Sign-Up Form Submission (Saves to DB)
    @PostMapping("/register")
    public String registerUser(@RequestParam String name, 
                               @RequestParam String email, 
                               @RequestParam String password, 
                               @RequestParam String phone) {
        
        // Creating the User object (Matches the updated User.java)
        User newUser = new User();
        newUser.setName(name);
        newUser.setEmail(email);
        newUser.setPassword(password);
        
        // NOW ACTIVATED: Saves phone to line 10 of your DB table
        newUser.setPhone(phone); 
        
        // Save to MySQL
        userRepository.save(newUser);
        
        // Redirect back to login so they can sign in with their new account
        return "redirect:/login?success=true";
    }

    // --- 2. RESTAURANT BROWSING ---

    @GetMapping("/")
    public String homePage(Model model) {
        model.addAttribute("restaurants", restaurantRepository.findAll());
        return "index"; 
    }

    // --- 3. ORDERING FLOW ---

    @GetMapping("/order/{id}")
    public String orderPage(@PathVariable Long id, Model model) {
        restaurantRepository.findById(id).ifPresent(restaurant -> {
            model.addAttribute("restaurant", restaurant);
        });
        return "order-details";
    }

    @PostMapping("/place-order")
    public String placeOrder(@RequestParam String location, 
                             @RequestParam String paymentMethod, 
                             Model model) {
        
        model.addAttribute("location", location);
        model.addAttribute("method", paymentMethod);
        
        return "success";
    }
}