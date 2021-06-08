package es.com.bitbox.bitbox2.repositories;

import es.com.bitbox.bitbox2.models.Article;
import org.springframework.data.repository.CrudRepository;

public interface ArticleRepository extends CrudRepository<Article, Long> {

}
