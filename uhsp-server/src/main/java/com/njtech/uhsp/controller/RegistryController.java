package com.njtech.uhsp.controller;

import com.njtech.uhsp.entity.Depart;
import com.njtech.uhsp.entity.Inspection;
import com.njtech.uhsp.entity.Registry;
import com.njtech.uhsp.service.DepartService;
import com.njtech.uhsp.service.InspectionService;
import com.njtech.uhsp.service.RegistryService;
import com.njtech.uhsp.service.StatService;
import com.njtech.uhsp.utils.Result;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/registry")
@Slf4j
public class RegistryController {
    @Autowired
    private RegistryService registryService;
    @Autowired
    private InspectionService inspectionService;
    @Autowired
    private DepartService departService;
    @Autowired
    private StatService statService;

    @PostMapping("/insert")
    public Result<Void> insert(@RequestBody Registry registry){
        registryService.save(registry);
        // 添加统计信息: 新增该科室的就诊数据
        // 1. 根据departId获得departName
        Depart depart = departService.findById(registry.getDepartId());
        String departName = depart.getDepartName();
        statService.updateClinic(departName);
        return Result.SUCCESS_RESULT;
    }

    @PostMapping("/findList")
    public List<Registry> findList(@RequestBody Registry registry){
        // 根据patient_id查找所有挂号单
        return registryService.findList(registry);
    }

    @PostMapping("/findListDoctor")
    public List<Registry> findListDoctor(@RequestBody Registry registry){
        // 根据doctor_id查找所有挂号单
        return registryService.findListDoctor(registry);
    }

    @PostMapping("/update")
    public Result<Void> update(@RequestBody Registry registry){
        registryService.save(registry);
        // 如果是该请求：
        // 设置status=1，且depart_id=999的请求
        // 即支付检查单，此时需要将相应信息写入inspection表
        if(registry.getStatus() == 1){
            // 先获取该registry
            Registry tmp = registryService.findById(registry.getId());
            // 检查depart_id状态
            if(Objects.equals(tmp.getDepartId(), "999")){
                // 为inspection表添加信息
                Inspection inspection = new Inspection();
                inspection.setRegistryId(tmp.getId());
                inspection.setStatus(0);
                inspectionService.save(inspection);
            }
        }
        return Result.SUCCESS_RESULT;
    }

    @PostMapping("/delete")
    public Result<Void> delete(@RequestBody Registry registry){
        registryService.delete(registry);
        return Result.SUCCESS_RESULT;
    }

}
