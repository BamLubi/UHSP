package com.njtech.uhsp.dao;

import com.njtech.uhsp.entity.Registry;

import java.util.List;

public interface RegistryDao extends BaseDao<Registry>{
    List<Registry> findListDoctor(Registry registry);
}
