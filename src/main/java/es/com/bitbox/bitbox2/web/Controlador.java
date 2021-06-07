package es.com.bitbox.bitbox2.web;

import es.com.bitbox.bitbox2.Persona;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

import static jdk.nashorn.internal.runtime.regexp.joni.Config.log;




public class Controlador {

    @GetMapping("/")
    public String inicio(Model model){

        //model.addAttribute("personas", personas);
        return "index";
    }

}
