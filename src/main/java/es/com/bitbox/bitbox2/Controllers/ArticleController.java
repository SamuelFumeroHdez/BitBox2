package es.com.bitbox.bitbox2.Controllers;

import es.com.bitbox.bitbox2.dto.ArticleDTO;
import es.com.bitbox.bitbox2.models.Article;
import es.com.bitbox.bitbox2.repositories.ArticleRepository;
import es.com.bitbox.bitbox2.services.IArticleService;
import es.com.bitbox.bitbox2.services.impl.ArticleService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ArticleController {

    private IArticleService iArticleService;

    public ArticleController(IArticleService iArticleService){
        super();
        this.iArticleService = iArticleService;
    }

    @GetMapping("/articles/")
    public List<ArticleDTO> getAllArticles(){
        return iArticleService.getAllArticles();
    }

    @PostMapping(value = "/articles", consumes = "application/json")
    public ArticleDTO createArticle(@RequestBody ArticleDTO articleDTO){

        return iArticleService.createArticle(articleDTO);
    }
}
