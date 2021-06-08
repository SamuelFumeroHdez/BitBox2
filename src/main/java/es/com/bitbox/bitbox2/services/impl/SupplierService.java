package es.com.bitbox.bitbox2.services.impl;

import es.com.bitbox.bitbox2.dto.SupplierDTO;
import es.com.bitbox.bitbox2.models.Supplier;
import es.com.bitbox.bitbox2.repositories.SupplierRepository;
import es.com.bitbox.bitbox2.services.ISupplierService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SupplierService implements ISupplierService {

    private final SupplierRepository supplierRepository;

    @Autowired
    private ModelMapper modelMapper;

    public SupplierService(SupplierRepository supplierRepository) {
        super();
        this.supplierRepository = supplierRepository;
    }

    @Override
    public List<SupplierDTO> getAllSuppliers() {
        List<Supplier> supplierList = (List<Supplier>) supplierRepository.findAll();
        return supplierList.stream().map(sup -> modelMapper.map(sup, SupplierDTO.class)) //Convertir la lista de pojos en DTO's
                .collect(Collectors.toList());
    }

    @Override
    public SupplierDTO createSupplier(SupplierDTO supplierDTO) {
        return null;
    }

    @Override
    public SupplierDTO getSupplierById(long id) {
        return null;
    }

    @Override
    public void deleteSupplier(long id) {

    }
}
