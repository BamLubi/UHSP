package com.njtech.uhsp.dao;

import com.njtech.uhsp.entity.Inspection;

import java.util.List;

public interface InspectionDao extends BaseDao<Inspection>{
    List<Inspection> findByPatientId(String patientId);
}
