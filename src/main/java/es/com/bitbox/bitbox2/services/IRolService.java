package es.com.bitbox.bitbox2.services;

import es.com.bitbox.bitbox2.dto.RolDTO;

import java.util.List;

public interface IRolService {
    List<RolDTO> getAllRoles();
    RolDTO createRol(RolDTO rolDTO);
    RolDTO getRolById(long id);
    void deleteRol(long id);


}
