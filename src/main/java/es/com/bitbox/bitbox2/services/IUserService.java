package es.com.bitbox.bitbox2.services;


import es.com.bitbox.bitbox2.dto.UserDTO;

import java.util.List;

public interface IUserService {
    List<UserDTO> getAllUserss();
    UserDTO createUser(UserDTO supplierDTO);
    UserDTO getUserById(long id);
    void deleteUser(long id);
}
