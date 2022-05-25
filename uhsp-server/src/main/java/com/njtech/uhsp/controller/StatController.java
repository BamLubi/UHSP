package com.njtech.uhsp.controller;

import com.njtech.uhsp.entity.Stat;
import com.njtech.uhsp.service.StatService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/stat")
@Slf4j
public class StatController {
    @Autowired
    private StatService statService;

    @PostMapping("/findList")
    public List<Stat> findList(@RequestBody Stat stat){
        return statService.findList(stat);
    }
}
