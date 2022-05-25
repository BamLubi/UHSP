package com.njtech.uhsp.service;

import com.njtech.uhsp.dao.DoctorDao;
import com.njtech.uhsp.entity.Doctor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService extends BaseService<DoctorDao, Doctor>{
    public List<Doctor> findAllByDepartId(String departId){
        return dao.findAllByDepartId(departId);
    }

    public List<Doctor> findAllAvlByDepartId(String departId, Integer week){
        return dao.findAllAvlByDepartId(departId, week);
    }
}
