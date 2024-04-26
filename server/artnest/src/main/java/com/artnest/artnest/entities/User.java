package com.artnest.artnest.entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="user_info")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    @Size(max = 10)
    private Long phoneNumber;

    @NotBlank(message = "email cannnot be empty")
    private String email;

    @NotBlank(message = "password cant be empty")
    //@JsonIgnore
    private String password;

    Role role;

    @Embedded
    @ElementCollection
    @CollectionTable(name = "payment_info", joinColumns = {@JoinColumn(name = "userid")})
    private List<Payment> payment = new ArrayList<>();
    // the name of the column will be user_id which contain id of user
    // the name of the table will be payment_info
    // here we donot need to create entity separately , to give more column names
    // @CollectionTable(name = "order_items", joinColumns = {
    // @JoinColumn(name = "order_id"),
    // @JoinColumn(name = "item_code")
    // })

    @OneToMany(mappedBy = "user")
    //we will say that the user in like table will contain the join data 
    private List<Like> like = new ArrayList<>();
    
    @OneToMany(mappedBy = "user")
    private List<Comment> comment = new ArrayList<>();

    private LocalDateTime createdAt;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));

    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
