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

    @ManyToOne
    @JoinTable(
            name="users",
            joinColumns = @JoinColumn (name = "idarticle"),
            inverseJoinColumns = @JoinColumn( name = "iduser")
    )
    private User user;

    @ManyToMany
    @JoinTable(
            name="pricereductions",
            joinColumns = @JoinColumn(name="idarticle"),
            inverseJoinColumns = @JoinColumn(name="idpricereduction")
    )
    private Set<PriceReduction> priceReductions;

    public Set<Supplier> getSuppliers(){
        return this.suppliers;
    }

    public User getUser(){
        return this.user;
    }

    public void setUser(User user){
        this.user = user;
    }

    public Set<PriceReduction> getPriceReductions() {
        return priceReductions;
    }

    public void setPriceReductions(Set<PriceReduction> priceReductions) {
        this.priceReductions = priceReductions;
    }
}
