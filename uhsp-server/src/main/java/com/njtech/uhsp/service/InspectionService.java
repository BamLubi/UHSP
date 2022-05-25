package com.njtech.uhsp.service;

import com.njtech.uhsp.dao.InspectionDao;
import com.njtech.uhsp.entity.Inspection;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InspectionService extends BaseService<InspectionDao, Inspection> {
    public List<Inspection> findByPatientId(String patientId){
        return dao.findByPatientId(patientId);
    }
}
