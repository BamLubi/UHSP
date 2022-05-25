package com.njtech.uhsp.controller;

import com.njtech.uhsp.entity.Doctor;
import com.njtech.uhsp.service.DoctorService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Calendar;
import java.util.List;

@RestController
@RequestMapping("/doctor")
@Slf4j
public class DoctorController {
    @Autowired
    private DoctorService doctorService;

    @PostMapping("/find")
    public Doctor find(@RequestBody Doctor doctor) {
        return doctorService.find(doctor);
    }

    @PostMapping("/findAllByDepartId")
    public List<Doctor> findAllByDepartId(@RequestBody Doctor doctor) {
        return doctorService.findAllByDepartId(doctor.getDepartId());
    }

    @PostMapping("/findAllAvlByDepartId")
    public List<Doctor> findAllAvlByDepartId(@RequestBody Doctor doctor) {
        Calendar calendar = Calendar.getInstance();
        Integer week = calendar.get(calendar.DAY_OF_WEEK) - 1;
        if (week == 0) week = 7;
        return doctorService.findAllAvlByDepartId(doctor.getDepartId(), week);
    }
}
