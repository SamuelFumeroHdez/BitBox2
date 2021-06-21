package es.com.bitbox.bitbox2.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long iduser;
    private String name;
    private String country;
    private String phone;
    private Date entryDate;
    private String description;
    private String email;

    @OneToOne
    @JoinTable(
            name="roles",
            joinColumns = @JoinColumn(name="iduser"),
            inverseJoinColumns = @JoinColumn(name="idRol")
    )
    private Rol rol;

    public Rol getRol() {
        return this.rol;
    }

    public void setRol(Rol rol) {
        this.rol = rol;
    }
}
