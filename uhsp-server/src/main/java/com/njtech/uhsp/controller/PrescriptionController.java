package com.njtech.uhsp.controller;

import com.njtech.uhsp.entity.Prescription;
import com.njtech.uhsp.entity.Registry;
import com.njtech.uhsp.service.PrescriptionService;
import com.njtech.uhsp.utils.Result;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/pres")
@Slf4j
public class PrescriptionController {
    @Autowired
    private PrescriptionService prescriptionService;

    @PostMapping("/insert")
    public Result<Void> insert(@RequestBody Prescription prescription){
        prescriptionService.save(prescription);
        return Result.SUCCESS_RESULT;
    }

    @PostMapping("/findList")
    public List<Prescription> findList(@RequestBody Prescription prescription){
        // 根据patient_id查找所有挂号单
        return prescriptionService.findList(prescription);
    }

    @PostMapping("/update")
    public Result<Void> update(@RequestBody Prescription prescription){
        prescriptionService.save(prescription);
        return Result.SUCCESS_RESULT;
    }

    @PostMapping("/delete")
    public Result<Void> delete(@RequestBody Prescription prescription){
        prescriptionService.delete(prescription);
        return Result.SUCCESS_RESULT;
    }
}
