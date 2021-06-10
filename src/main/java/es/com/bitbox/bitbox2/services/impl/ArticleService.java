package es.com.bitbox.bitbox2.services.impl;

import es.com.bitbox.bitbox2.Controllers.SupplierController;
import es.com.bitbox.bitbox2.dto.ArticleDTO;
import es.com.bitbox.bitbox2.dto.SupplierDTO;
import es.com.bitbox.bitbox2.models.Article;
import es.com.bitbox.bitbox2.models.PriceReduction;
import es.com.bitbox.bitbox2.models.Supplier;
import es.com.bitbox.bitbox2.models.User;
import es.com.bitbox.bitbox2.repositories.ArticleRepository;
import es.com.bitbox.bitbox2.repositories.PriceReductionRepository;
import es.com.bitbox.bitbox2.repositories.SupplierRepository;
import es.com.bitbox.bitbox2.repositories.UserRepository;
import es.com.bitbox.bitbox2.services.IArticleService;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ArticleService implements IArticleService {

    @Autowired
    private SupplierRepository supplierRepository;
    @Autowired
    private ArticleRepository articleRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PriceReductionRepository priceReductionRepository;
    @Autowired
    private ModelMapper modelMapper;


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

        return modelMapper.map(articleRepository.findById(id).get(),ArticleDTO.class);

    }

    @Override
    public void deleteArticle(long id) {
        articleRepository.deleteById(id);
    }

    @Override
    public ArticleDTO addSupplier(long idArticle, long idSupplier) throws Exception{

        Article article = articleRepository.findById(idArticle).get();
        Supplier supplier = supplierRepository.findById(idSupplier).get();

        article.getSuppliers().add(supplier);
        articleRepository.save(article);
        return modelMapper.map(article,ArticleDTO.class);

    }

    @Override
    public ArticleDTO updateUser(long idArticle, long idUser) {
        Article article = articleRepository.findById(idArticle).get();
        User user = userRepository.findById(idUser).get();

        article.setUser(user);
        articleRepository.save(article);
        return modelMapper.map(article,ArticleDTO.class);
    }

    @Override
    public ArticleDTO insertPriceReduction(long idArticle, long idPriceReduction) {
        Article article = articleRepository.findById(idArticle).get();
        PriceReduction priceReduction = priceReductionRepository.findById(idPriceReduction).get();

        article.getPriceReductions().add(priceReduction);
        articleRepository.save(article);
        return modelMapper.map(article,ArticleDTO.class);
    }


}
