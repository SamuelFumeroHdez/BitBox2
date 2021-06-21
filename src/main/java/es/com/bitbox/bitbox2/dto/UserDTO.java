package es.com.bitbox.bitbox2.dto;

import es.com.bitbox.bitbox2.models.Rol;
import lombok.Data;

import java.util.Date;

@Data
public class UserDTO {
    private Long iduser;
    private String name;
    private String country;
    private String phone;
    private Date entryDate;
    private String description;
    private String email;
    private Rol rol;
}
