package com.example.inventory;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDate;


@Entity
@Getter
@Setter
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private Double price;
    private Integer quantity;
    private boolean fragile;
    private LocalDate expiryDate;

    public Product() {
        this.name = "";
        this.description = "";
        this.price = 0.0;
        this.quantity = 0;
        this.fragile = false;
        this.expiryDate = LocalDate.now();
    }
}