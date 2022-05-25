package com.njtech.uhsp.service;

import com.njtech.uhsp.dao.RegistryDao;
import com.njtech.uhsp.entity.Registry;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistryService extends BaseService<RegistryDao, Registry> {
    public List<Registry> findListDoctor(Registry registry){
        return dao.findListDoctor(registry);
    }
}
