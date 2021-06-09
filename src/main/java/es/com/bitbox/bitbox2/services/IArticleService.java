package es.com.bitbox.bitbox2.services;

import es.com.bitbox.bitbox2.dto.ArticleDTO;
import es.com.bitbox.bitbox2.dto.SupplierDTO;
import es.com.bitbox.bitbox2.models.Supplier;

import java.util.List;

public interface IArticleService {
    List<ArticleDTO> getAllArticles();
    ArticleDTO createArticle(ArticleDTO articleDTO);
    ArticleDTO getArticleById(long id);
    void deleteArticle(long id);
    void addSupplier(long idArticle, long idSupplier) throws Exception;
}
