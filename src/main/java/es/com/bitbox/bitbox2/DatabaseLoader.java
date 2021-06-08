/*package es.com.bitbox.bitbox2;

import es.com.bitbox.bitbox2.models.Article;
import es.com.bitbox.bitbox2.repositories.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


public class DatabaseLoader implements CommandLineRunner {

    private final ArticleRepository repository;

    @Autowired
    public DatabaseLoader(ArticleRepository repository) {
        this.repository = repository;
    }

    /*@Override
    public void run(String... args) throws Exception {
        this.repository.save(new Article("Articulo 1", 40.95, "Active"));
    }
}*/
