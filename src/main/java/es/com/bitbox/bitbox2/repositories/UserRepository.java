package es.com.bitbox.bitbox2.repositories;

import es.com.bitbox.bitbox2.models.Supplier;
import es.com.bitbox.bitbox2.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

}
