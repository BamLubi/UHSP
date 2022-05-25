package com.njtech.uhsp.controller;

import com.njtech.uhsp.entity.Drug;
import com.njtech.uhsp.service.DrugService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/drug")
@Slf4j
public class DrugController {
    @Autowired
    private DrugService drugService;

    @GetMapping("")
    public List<Drug> getAll(){
        return drugService.findAll();
    }
}
