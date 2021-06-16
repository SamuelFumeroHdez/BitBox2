package es.com.bitbox.bitbox2.dto;

import lombok.Data;

import java.util.Date;

@Data
public class PriceReductionDTO {
    private Long idPriceReduction;
    private String description;
    private double reducedPrice;
    private Date startDate;
    private Date endDate;
}
