# Online-order-food

🍔 Online Food Delivery System (ByteBites)
A professional Full-Stack Web Application built with Java Spring Boot, Thymeleaf, and MySQL. This project is designed following strict OOP principles, SOLID guidelines, and several Design Patterns.

🛠️ Technology Stack
Backend: Java 17+, Spring Boot 3.x

Frontend: Thymeleaf (MVC Pattern)

Database: MySQL (phpMyAdmin)

Build Tool: Maven

🧠 Software Engineering Patterns (80%+ Implementation)
This project satisfies the advanced criteria by implementing the following:

1. SOLID Principles
Single Responsibility (S): Distinct separation between Models, Repositories, and Controllers.

Open/Closed (O): Using the Strategy pattern allows us to add new payment methods without modifying existing logic.

2. Design Patterns
MVC Pattern: The architecture is split into Model (Entities), View (Thymeleaf), and Controller (Web/REST).

Strategy Pattern: Encapsulated payment algorithms (Credit Card vs. Cash on Delivery).

Factory Pattern: Implemented a UserFactory to handle the instantiation of User roles (Admin/Customer).

Singleton Pattern: Spring managed @Service and @Repository components act as Singletons by default.

3. OOP Concepts
Inheritance: Used Single Table Inheritance (@Inheritance(strategy = InheritanceType.SINGLE_TABLE)) for the User hierarchy.

Encapsulation: All data models use private fields with public Getters and Setters.

📊 System Structure
Users: Manages Admins and Customers.

Restaurants: Handles restaurant listings and cuisine types.

Menu Items: Linked to specific restaurants.

Orders: Manages the transaction flow.

🚀 Setup & Installation
Database: Import the provided SQL or create a database named food_delivery_db in phpMyAdmin.

Configuration: Update src/main/resources/application.properties with your MySQL username and password.

Run:

Bash
.\mvnw spring-boot:run
Access: * User Interface: http://localhost:8080/

REST API: http://localhost:8080/api/restaurants

👥 Contributors
Zeyad Samir 
Myriam Hamam
