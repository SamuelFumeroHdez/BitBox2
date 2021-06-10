package es.com.bitbox.bitbox2.Controllers;

import es.com.bitbox.bitbox2.dto.ArticleDTO;
import es.com.bitbox.bitbox2.dto.SupplierDTO;
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

    @PutMapping(value = "/articles/{idArticle}/suppliers/{idSupplier}")
    public ArticleDTO insertSupplier(@PathVariable(name = "idArticle") Long idArticle, @PathVariable(name = "idSupplier") Long idSupplier) throws Exception {

        return iArticleService.addSupplier(idArticle, idSupplier);
    }

    @PutMapping(value = "/articles/{idArticle}/users/{idUser}")
    public ArticleDTO updateUser(@PathVariable(name = "idArticle") Long idArticle, @PathVariable(name = "idUser") Long idUser) throws Exception {
        //return iArticleService.addSupplier(supplierDTO, id);
        return iArticleService.updateUser(idArticle, idUser);

    }

    @PutMapping(value = "/articles/{idArticle}/priceReductions/{idPriceReduction}")
    public ArticleDTO insertPriceReduction(@PathVariable(name = "idArticle") Long idArticle, @PathVariable(name = "idPriceReduction") Long idPriceReduction) throws Exception {
        //return iArticleService.addSupplier(supplierDTO, id);
        return iArticleService.insertPriceReduction(idArticle, idPriceReduction);

    }

    @GetMapping("/articles/{id}")
    public ArticleDTO getArticleById(@PathVariable(name = "id") Long id){
        return iArticleService.getArticleById(id);
    }

    @DeleteMapping("/articles/{id}")
    public void deleteArticle(@PathVariable(name = "id") Long id) {
        iArticleService.deleteArticle(id);
    }

}
