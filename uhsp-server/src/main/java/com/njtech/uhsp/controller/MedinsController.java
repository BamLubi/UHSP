package com.njtech.uhsp.controller;

import com.njtech.uhsp.entity.Medins;
import com.njtech.uhsp.service.MedinsService;
import com.njtech.uhsp.utils.Result;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/medins")
@Slf4j
public class MedinsController {
    @Autowired
    private MedinsService medinsService;

    @PostMapping("/insert")
    public Result<Void> insert(@RequestBody Medins medins){
        medinsService.save(medins);
        return Result.SUCCESS_RESULT;
    }

    @PostMapping("/findList")
    public List<Medins> findList(@RequestBody Medins medins){
        return medinsService.findList(medins);
    }

    @PostMapping("/update")
    public Result<Void> update(@RequestBody Medins medins){
        medinsService.save(medins);
        return Result.SUCCESS_RESULT;
    }
}
