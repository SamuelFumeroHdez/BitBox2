package es.com.bitbox.bitbox2.models;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class Supplier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idsupplier;
    private String name;
    private String country;
    private String phone;
    private Date entryDate;
    private String description;
    private String email;

    public Long getIdsupplier() {
        return idsupplier;
    }

    public void setIdsupplier(Long idsupplier) {
        this.idsupplier = idsupplier;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
}
