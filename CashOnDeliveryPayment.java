package com.example.demo.strategy;

public class CashOnDeliveryPayment implements PaymentStrategy {
    
    @Override
    public void pay(double amount) {
        System.out.println("Payment of $" + amount + " will be collected in cash upon delivery.");
    }
}