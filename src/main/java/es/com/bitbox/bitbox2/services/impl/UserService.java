package es.com.bitbox.bitbox2.services.impl;

import es.com.bitbox.bitbox2.dto.ArticleDTO;
import es.com.bitbox.bitbox2.dto.UserDTO;
import es.com.bitbox.bitbox2.models.Article;
import es.com.bitbox.bitbox2.models.Rol;
import es.com.bitbox.bitbox2.models.User;
import es.com.bitbox.bitbox2.repositories.RolRepository;
import es.com.bitbox.bitbox2.repositories.UserRepository;
import es.com.bitbox.bitbox2.services.IUserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService implements IUserService {

    private final UserRepository userRepository;

    @Autowired
    private RolRepository rolRepository;

    @Autowired
    private ModelMapper modelMapper;

    public UserService(UserRepository userRepository) {
        super();
        this.userRepository = userRepository;
    }


    @Override
    public List<UserDTO> getAllUserss() {
        List<User> userList = (List<User>) userRepository.findAll();
        return userList.stream().map(user -> modelMapper.map(user, UserDTO.class)) //Convertir la lista de pojos en DTO's
                .collect(Collectors.toList());
    }

    @Override
    public UserDTO createUser(UserDTO userDTO) {
        return modelMapper.map(userRepository.save(modelMapper.map(userDTO, User.class)), UserDTO.class);
    }

    @Override
    public UserDTO getUserById(long id) {
        Optional<User> userResult = userRepository.findById(id);
        return modelMapper.map(userResult.get(), UserDTO.class);
    }

    @Override
    public void deleteUser(long id) {
        userRepository.deleteById(id);
    }

    @Override
    public UserDTO updateRol(long idUser, long idRol) {
        User user = userRepository.findById(idUser).get();
        Rol rol = rolRepository.findById(idUser).get();

        user.setRol(rol);
        userRepository.save(user);
        return modelMapper.map(user, UserDTO.class);
    }
}
