package es.com.bitbox.bitbox2.Controllers;

import es.com.bitbox.bitbox2.dto.PriceReductionDTO;
import es.com.bitbox.bitbox2.services.IPriceReductionService;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping(value = "/priceReductions", consumes = "application/json")
    public PriceReductionDTO createPriceReduction(@RequestBody PriceReductionDTO priceReductionDTO){
        return iPriceReductionService.createPriceReduction(priceReductionDTO);
    }

    @GetMapping("/priceReductions/{id}")
    public PriceReductionDTO getPriceReductionById(@PathVariable(name = "id") Long id){
        return iPriceReductionService.getPriceReductionById(id);
    }

    @DeleteMapping("/priceReductions/{id}")
    public void deletePriceReductionById(@PathVariable(name = "id") Long id){
        iPriceReductionService.deletePriceReduction(id);
    }
}
