package com.artnest.artnest.dao;

import java.util.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.artnest.artnest.entities.Product;

@Repository
@Component
public interface ProductRepository extends CrudRepository<Product,Long> {

    public Product findByTitle(String name);
    
    
    
    
}
