package es.com.bitbox.bitbox2.Controllers;

import es.com.bitbox.bitbox2.dto.SupplierDTO;
import es.com.bitbox.bitbox2.dto.UserDTO;
import es.com.bitbox.bitbox2.services.ISupplierService;
import es.com.bitbox.bitbox2.services.IUserService;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping(value = "/users", consumes = "application/json")
    public UserDTO createUser(@RequestBody UserDTO userDTO){
        return iUserService.createUser(userDTO);
    }

    @GetMapping("/users/{id}")
    public UserDTO getUserbyId(@PathVariable(name = "id") Long id){
        return iUserService.getUserById(id);
    }


    @DeleteMapping("/users/{id}")
    public void deleteUserById(@PathVariable(name = "id") Long id){
        iUserService.deleteUser(id);
    }


}
