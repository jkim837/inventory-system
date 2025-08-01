package com.example.inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.inventory.Product;

// used to manage Product entities in the database 
// data access layer (interface to the database)
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}
