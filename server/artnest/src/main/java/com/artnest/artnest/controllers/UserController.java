package com.artnest.artnest.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.artnest.artnest.dao.CategoryRepository;
import com.artnest.artnest.dao.LikeRepository;
import com.artnest.artnest.dao.ProductRepository;
import com.artnest.artnest.dao.UserRepository;
import com.artnest.artnest.dto.UpdateLikesRequest;
import com.artnest.artnest.entities.Like;
import com.artnest.artnest.entities.Product;
import com.artnest.artnest.entities.User;
import com.artnest.artnest.services.ProductService;
import com.artnest.artnest.services.UserService;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import java.time.LocalDateTime;


@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
@CrossOrigin("*")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProductService productService;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private LikeRepository likeRepository;


    @GetMapping
    public ResponseEntity getMethodName() {
        return  ResponseEntity.ok().build();
    }

    @CrossOrigin("*")
    @PostMapping("/update-likes")
    public ResponseEntity<?> postMethodName(@RequestBody UpdateLikesRequest req) {

        String email = req.getEmail();
        if(email.isEmpty()){
            System.out.println("empty email");
        }
        Optional<User> u = userRepository.findByEmail(email);
        User user = u.get();
        Long id = user.getId();
        Long product_id = req.getProduct_id();
        if(product_id.equals(null)){
            System.out.println("empty product");
        }
        Optional<Product> p = productRepository.findById(product_id);
        Like like = new Like();
        Product product = p.get();
        like.setProduct(product);
        // like.setImage(product);
        like.setUser(user);
        like.setCreatedAt(LocalDateTime.now());
        System.out.println("like"+like);
        if(!p.isEmpty()){
            likeRepository.save(like);
        }else{
            System.out.println("empty");
        } 
        return ResponseEntity.ok().body(null);
    }

    @CrossOrigin("*")
    @PostMapping("/update-dislikes")
    public ResponseEntity<?> postMethod(@RequestBody UpdateLikesRequest req) {
        String email = req.getEmail();
        Optional<User> u = userRepository.findByEmail(email);
        User user = u.get();
        Long id = user.getId();
        Long product_id = req.getProduct_id();
        Optional<Product> p = productRepository.findById(product_id);
        Product product = p.get();
        
        Like like = likeRepository.findByProductAndUser(product, user);
        like.setProduct(null);
        like.setUser(null);
        likeRepository.deleteById(like.getId());  
        return ResponseEntity.ok().body(null);
    }

    @CrossOrigin("*")
    @PostMapping("/isLiked")
    public ResponseEntity<?> post(@RequestBody UpdateLikesRequest req) {
        String email = req.getEmail();
        Optional<User> u = userRepository.findByEmail(email);
        User user = u.get();
        Long id = user.getId();
        Long product_id = req.getProduct_id();
        Optional<Product> p = productRepository.findById(product_id);
        Product product = p.get();
        
        Like like = likeRepository.findByProductAndUser(product, user);
        if(like.equals(null)){
            return ResponseEntity.ok().body(false);
        }else{
            return ResponseEntity.ok().body(true);

        }
        
    }
    @CrossOrigin("*")
    @GetMapping("/countOfLikes/{product_id}")
    public ResponseEntity<?> getMethodName(@RequestParam Long product_id) {
        
        return ResponseEntity.ok().body(null);
    }
    


    
    


}
