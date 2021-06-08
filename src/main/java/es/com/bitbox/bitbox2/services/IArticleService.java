package es.com.bitbox.bitbox2.services;

import es.com.bitbox.bitbox2.dto.ArticleDTO;

import java.util.List;

public interface IArticleService {
    List<ArticleDTO> getAllArticles();
    ArticleDTO createArticle(ArticleDTO articleDTO);
    ArticleDTO getArticleById(long id);
    void deleteArticle(long id);
}
