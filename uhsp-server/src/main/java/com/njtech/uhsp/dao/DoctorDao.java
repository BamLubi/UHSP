package com.njtech.uhsp.dao;

import com.njtech.uhsp.entity.Doctor;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface DoctorDao extends BaseDao<Doctor> {
    List<Doctor> findAllByDepartId(String departId);

    List<Doctor> findAllAvlByDepartId(@Param("departId") String departId, @Param("week") Integer week);
}
