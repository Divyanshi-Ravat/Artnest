package com.artnest.artnest.entities;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.*;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name="product_info")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String description;
    private int price;
    private int discountedPrice;
    private int discountPresent;
    private int quantity;
    
    private String filePath;


    @OneToMany(mappedBy = "image", cascade = CascadeType.ALL)
    private List<Like> likes = new ArrayList<>();


    @OneToMany(mappedBy = "image",cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();
    

    
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "categoryId")
    @JsonManagedReference
    private Category category;
    
}
