package com.artnest.artnest.controllers;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.artnest.artnest.dao.ProductRepository;
import com.artnest.artnest.dto.CreateProductRequest;
import com.artnest.artnest.entities.Product;
import com.artnest.artnest.services.*;
import org.slf4j.Logger; // Replace with your specific logging library


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@RequestMapping("/api/all")
@RequiredArgsConstructor
public class AllAccess {
    @Autowired
    private ProductService productService;

    @Autowired
    private ProductRepository productRepository;

    @CrossOrigin("*")
    @GetMapping("/getAllProducts")
    public ResponseEntity<?> getAllProducts() throws IOException {
       
           return productService.getAllProducts();
            
            

    }
    
    
    @CrossOrigin("*")
    @GetMapping("/findProductByTitle/{title}")
    public ResponseEntity<?> findByTitle(@PathVariable("title") String title)  throws java.io.IOException{
        return productService.findProductByTitle(title);

    }


    
}
