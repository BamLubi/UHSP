package com.njtech.uhsp.controller;

import com.njtech.uhsp.entity.Depart;
import com.njtech.uhsp.service.DepartService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/depart")
@Slf4j
public class DepartController {
    @Autowired
    private DepartService departService;

    @GetMapping("")
    public List<Depart> findAll() { return departService.findAll(); }
}
