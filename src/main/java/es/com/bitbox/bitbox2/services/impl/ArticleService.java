package es.com.bitbox.bitbox2.services.impl;

import es.com.bitbox.bitbox2.dto.ArticleDTO;
import es.com.bitbox.bitbox2.models.Article;
import es.com.bitbox.bitbox2.repositories.ArticleRepository;
import es.com.bitbox.bitbox2.services.IArticleService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ArticleService implements IArticleService {

    private final ArticleRepository articleRepository;
    @Autowired
    private ModelMapper modelMapper;

    public ArticleService(ArticleRepository articleRepository){
        super();
        this.articleRepository = articleRepository;
    }
    @Override
    public List<ArticleDTO> getAllArticles() {
        List<Article> articleList = (List<Article>) articleRepository.findAll();
        return articleList.stream().map(art -> modelMapper.map(art, ArticleDTO.class)) //Convertir la lista de pojos en DTO's
                .collect(Collectors.toList());
    }

    @Override
    public ArticleDTO createArticle(ArticleDTO articleDTO) {
        Article articleRequest = modelMapper.map(articleDTO, Article.class);
        Article article = articleRepository.save(articleRequest);
        return modelMapper.map(article,ArticleDTO.class);
    }

    @Override
    public ArticleDTO getArticleById(long id) {
        return null;
    }

    @Override
    public void deleteArticle(long id) {

    }
}
