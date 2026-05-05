package com.example.demo.strategy;

public class PaymentContext {
    private PaymentStrategy paymentStrategy;

    // This lets us change the payment method on the fly!
    public void setPaymentStrategy(PaymentStrategy paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    public void executePayment(double amount) {
        if (paymentStrategy == null) {
            System.out.println("Please select a payment method first!");
        } else {
            paymentStrategy.pay(amount);
        }
    }
}