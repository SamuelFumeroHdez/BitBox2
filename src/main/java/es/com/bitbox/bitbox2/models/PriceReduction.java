package es.com.bitbox.bitbox2.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
public class PriceReduction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPriceReduction;
    private String description;
    private double reducedPrice;
    private Date startDate;
    private Date endDate;
}
