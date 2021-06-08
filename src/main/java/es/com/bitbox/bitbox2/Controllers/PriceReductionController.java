package es.com.bitbox.bitbox2.Controllers;

import es.com.bitbox.bitbox2.dto.PriceReductionDTO;
import es.com.bitbox.bitbox2.dto.UserDTO;
import es.com.bitbox.bitbox2.services.IPriceReductionService;
import es.com.bitbox.bitbox2.services.IUserService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class PriceReductionController {
    private IPriceReductionService iPriceReductionService;

    public PriceReductionController(IPriceReductionService iPriceReductionService){
        super();
        this.iPriceReductionService = iPriceReductionService;
    }

    @GetMapping("/priceReductions/")
    public List<PriceReductionDTO> getAllPriceReductions(){
        return iPriceReductionService.getAllPriceReductions();
    }


}
