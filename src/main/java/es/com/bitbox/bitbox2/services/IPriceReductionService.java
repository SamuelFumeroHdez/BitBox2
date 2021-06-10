package es.com.bitbox.bitbox2.services;


import es.com.bitbox.bitbox2.dto.PriceReductionDTO;

import java.util.List;

public interface IPriceReductionService {
    List<PriceReductionDTO> getAllPriceReductions();
    PriceReductionDTO createPriceReduction(PriceReductionDTO priceReductionDTO);
    PriceReductionDTO getPriceReductionById(long id);
    void deletePriceReduction(long id);
}
