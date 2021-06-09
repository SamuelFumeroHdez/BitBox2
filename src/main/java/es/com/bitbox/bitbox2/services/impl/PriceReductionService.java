package es.com.bitbox.bitbox2.services.impl;

import es.com.bitbox.bitbox2.dto.PriceReductionDTO;
import es.com.bitbox.bitbox2.dto.UserDTO;
import es.com.bitbox.bitbox2.models.Article;
import es.com.bitbox.bitbox2.models.PriceReduction;
import es.com.bitbox.bitbox2.models.User;
import es.com.bitbox.bitbox2.repositories.PriceReductionRepository;
import es.com.bitbox.bitbox2.repositories.UserRepository;
import es.com.bitbox.bitbox2.services.IPriceReductionService;
import es.com.bitbox.bitbox2.services.IUserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PriceReductionService implements IPriceReductionService {

    private final PriceReductionRepository priceReductionRepository;

    @Autowired
    private ModelMapper modelMapper;

    public PriceReductionService(PriceReductionRepository priceReductionRepository) {
        super();
        this.priceReductionRepository = priceReductionRepository;
    }

    @Override
    public List<PriceReductionDTO> getAllPriceReductions() {
        List<PriceReduction> priceReductionList = (List<PriceReduction>) priceReductionRepository.findAll();
        return priceReductionList.stream().map(priceReduction -> modelMapper.map(priceReduction, PriceReductionDTO.class)) //Convertir la lista de pojos en DTO's
                .collect(Collectors.toList());
    }

    @Override
    public PriceReductionDTO createPriceReduction(PriceReductionDTO priceReductionDTO) {
        PriceReduction priceReductionRequest = modelMapper.map(priceReductionDTO, PriceReduction.class);
        PriceReduction priceReductionResponse = priceReductionRepository.save(priceReductionRequest);
        return modelMapper.map(priceReductionResponse, PriceReductionDTO.class);
    }

    @Override
    public PriceReductionDTO getPriceReductionById(long id) {
        return modelMapper.map(priceReductionRepository.findById(id), PriceReductionDTO.class);
    }

    @Override
    public void deletePriceReduction(long id) {
        priceReductionRepository.deleteById(id);
    }
}
