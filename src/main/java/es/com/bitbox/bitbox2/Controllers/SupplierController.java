package es.com.bitbox.bitbox2.Controllers;

import es.com.bitbox.bitbox2.dto.SupplierDTO;
import es.com.bitbox.bitbox2.services.ISupplierService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @GetMapping("/suppliers/")
    public List<SupplierDTO> getAllSuppliers(){
        return iSupplierService.getAllSuppliers();
    }


}
