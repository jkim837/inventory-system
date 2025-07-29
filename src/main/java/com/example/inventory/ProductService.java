package com.example.inventory;

import com.example.inventory.Product;
import com.example.inventory.ProductRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

//add any conditions requred for the product
//such as expiry date, price, quantity, etc.

@Service
    public class ProductService {
        private final ProductRepository productRepository;
        public ProductService(ProductRepository productRepository) {
            this.productRepository = productRepository;
        }

        public Product saveProduct(Product product) {
            if(product.getName() == null || product.getName().isEmpty()) {
                throw new IllegalArgumentException("Product name cannot be empty");
            }
            if(product.getPrice() < 0) {
                throw new IllegalArgumentException("Product price cannot be negative");
        }
        if(product.getQuantity() < 0) {
                throw new IllegalArgumentException("Product quantity cannot be negative");
            }
            if(product.getExpiryDate().isBefore(LocalDate.now())) {
                throw new IllegalArgumentException("Product expiry date cannot be in the past");
            }
            return productRepository.save(product);
        }


}