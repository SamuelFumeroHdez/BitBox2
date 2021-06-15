package es.com.bitbox.bitbox2.Controllers;

import es.com.bitbox.bitbox2.dto.SupplierDTO;
import es.com.bitbox.bitbox2.models.Supplier;
import es.com.bitbox.bitbox2.services.ISupplierService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class SupplierController {
    private ISupplierService iSupplierService;

    public SupplierController(ISupplierService iSupplierService){
        super();
        this.iSupplierService = iSupplierService;
    }

    //@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/suppliers/")
    public List<SupplierDTO> getAllSuppliers(){
        return iSupplierService.getAllSuppliers();
    }

    //@CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/suppliers", consumes = "application/json")
    public SupplierDTO createSupplier(@RequestBody SupplierDTO supplierDTO){
        return iSupplierService.createSupplier(supplierDTO);
    }

    //@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/suppliers/{id}")
    public SupplierDTO getSupplierById(@PathVariable(name = "id") Long id){
        return iSupplierService.getSupplierById(id);
    }

    //@CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/suppliers/{id}")
    public void deleteSupplierById(@PathVariable(name = "id") Long id){
        iSupplierService.deleteSupplier(id);
    }


}
