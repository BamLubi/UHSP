package com.njtech.uhsp.controller;

import com.njtech.uhsp.entity.Inspection;
import com.njtech.uhsp.service.InspectionService;
import com.njtech.uhsp.utils.Result;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/inspect")
@Slf4j
public class InspectionController {
    @Autowired
    private InspectionService inspectionService;

    @GetMapping("/findAll")
    public List<Inspection> findAll(){
        return inspectionService.findAll();
    }

    @PostMapping("/update")
    public Result<Void> update(@RequestBody Inspection inspection){
        inspectionService.save(inspection);
        return Result.SUCCESS_RESULT;
    }

    @GetMapping("/{patientId}")
    public List<Inspection> findByPatientId(@PathVariable String patientId){
        return inspectionService.findByPatientId(patientId);
    }

    @PostMapping("/delete")
    public Result<Void> delete(@RequestBody Inspection inspection){
        inspectionService.delete(inspection);
        return Result.SUCCESS_RESULT;
    }
}
