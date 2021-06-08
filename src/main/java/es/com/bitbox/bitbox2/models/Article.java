package es.com.bitbox.bitbox2.models;

import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;


@Entity
@Getter
@Setter
public class Article {

    @Id
    @GeneratedValue
    private long id;
    private String description;
    private double precio;
    private String status;
    private Date creationDate;

    @ManyToMany
    @JoinTable(
            name="suppliers",
            joinColumns = @JoinColumn(name="idarticle"),
            inverseJoinColumns = @JoinColumn(name="idvendor")
    )
    private Set<Supplier> suppliers;

    /*public Article(String description, double precio, String status){
        this.description = description;
        this.precio = precio;
        this.status = status;
        this.creationDate = new Date();
    }*/

}
