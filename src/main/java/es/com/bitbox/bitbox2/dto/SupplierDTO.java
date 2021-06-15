package es.com.bitbox.bitbox2.dto;

import lombok.Data;

import java.util.Date;

@Data
public class SupplierDTO {
    private Long idsupplier;
    private String name;
    private String country;
    private String phone;
    private Date entryDate;
    private String description;
    private String email;
}
