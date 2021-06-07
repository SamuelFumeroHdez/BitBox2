package es.com.bitbox.bitbox2;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
@Data
public class Persona {

    @Id
    private long id;
    private String nombre;
    private String apellido;
    private String email;
    private String telefono;

}
