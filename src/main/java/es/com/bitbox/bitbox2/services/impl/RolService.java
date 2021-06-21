package es.com.bitbox.bitbox2.services.impl;


import es.com.bitbox.bitbox2.dto.RolDTO;
import es.com.bitbox.bitbox2.models.Rol;
import es.com.bitbox.bitbox2.repositories.RolRepository;
import es.com.bitbox.bitbox2.services.IRolService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RolService implements IRolService {

    private final RolRepository rolRepository;

    @Autowired
    private ModelMapper modelMapper;

    public RolService(RolRepository rolRepository) {
        super();
        this.rolRepository = rolRepository;
    }


    @Override
    public List<RolDTO> getAllRoles() {
        List<Rol> rolList = (List<Rol>) rolRepository.findAll();
        return rolList.stream().map(rol -> modelMapper.map(rol, RolDTO.class)) //Convertir la lista de pojos en DTO's
                .collect(Collectors.toList());
    }

    @Override
    public RolDTO createRol(RolDTO rolDTO) {
        return modelMapper.map(rolRepository.save(modelMapper.map(rolDTO, Rol.class)), RolDTO.class);
    }

    @Override
    public RolDTO getRolById(long id) {
        Optional<Rol> userResult = rolRepository.findById(id);
        return modelMapper.map(userResult.get(), RolDTO.class);
    }

    @Override
    public void deleteRol(long id) {
        rolRepository.deleteById(id);
    }
}
