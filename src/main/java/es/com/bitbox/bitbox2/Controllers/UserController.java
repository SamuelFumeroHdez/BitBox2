package es.com.bitbox.bitbox2.Controllers;

import es.com.bitbox.bitbox2.dto.ArticleDTO;
import es.com.bitbox.bitbox2.dto.UserDTO;
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

    //@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/users/")
    public List<UserDTO> getAllSuppliers(){
        return iUserService.getAllUserss();
    }

    //@CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/users", consumes = "application/json")
    public UserDTO createUser(@RequestBody UserDTO userDTO){
        return iUserService.createUser(userDTO);
    }

    //@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/users/{id}")
    public UserDTO getUserbyId(@PathVariable(name = "id") Long id){
        return iUserService.getUserById(id);
    }

    //@CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/users/{id}")
    public void deleteUserById(@PathVariable(name = "id") Long id){
        iUserService.deleteUser(id);
    }

    @PutMapping(value = "/users/{idUser}/roles/{idRol}")
    public UserDTO updateRol(@PathVariable(name = "idUser") Long idUser, @PathVariable(name = "idRol") Long idRol) throws Exception {
        //return iArticleService.addSupplier(supplierDTO, id);
        return iUserService.updateRol(idUser, idRol);

    }


}
