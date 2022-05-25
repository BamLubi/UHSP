package com.njtech.uhsp.dao;

import com.njtech.uhsp.entity.Stat;

public interface StatDao extends BaseDao<Stat> {
    void updateClinic(String departName);
    Stat findByTitle(String title);
}
