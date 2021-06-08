package es.com.bitbox.bitbox2.services;

import es.com.bitbox.bitbox2.dto.ArticleDTO;
import es.com.bitbox.bitbox2.dto.SupplierDTO;

import java.util.List;

public interface ISupplierService {
    List<SupplierDTO> getAllSuppliers();
    SupplierDTO createSupplier(SupplierDTO supplierDTO);
    SupplierDTO getSupplierById(long id);
    void deleteSupplier(long id);
}
