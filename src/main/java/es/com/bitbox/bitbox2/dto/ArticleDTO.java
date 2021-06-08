package es.com.bitbox.bitbox2.dto;

import es.com.bitbox.bitbox2.models.Supplier;
import lombok.Data;

import java.util.Date;
import java.util.Set;

@Data
public class ArticleDTO {
    private long id;
    private String description;
    private double precio;
    private String status;
    private Date creationDate;
    private Set<Supplier> suppliers;
}
