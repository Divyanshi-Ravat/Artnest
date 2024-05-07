package com.artnest.artnest.entities;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
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
