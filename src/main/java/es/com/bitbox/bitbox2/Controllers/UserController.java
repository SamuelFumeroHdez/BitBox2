package es.com.bitbox.bitbox2.Controllers;

import es.com.bitbox.bitbox2.dto.SupplierDTO;
import es.com.bitbox.bitbox2.dto.UserDTO;
import es.com.bitbox.bitbox2.services.ISupplierService;
import es.com.bitbox.bitbox2.services.IUserService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class UserController {
    private IUserService iUserService;

    public UserController(IUserService iUserService){
        super();
        this.iUserService = iUserService;
    }

    @GetMapping("/users/")
    public List<UserDTO> getAllSuppliers(){
        return iUserService.getAllUserss();
    }


}
