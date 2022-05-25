package com.njtech.uhsp.service;

import com.njtech.uhsp.dao.StatDao;
import com.njtech.uhsp.entity.Stat;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class StatService extends BaseService<StatDao, Stat> {
    public Stat findByTitle(String title) {
        return dao.findByTitle(title);
    }

    public void updateClinic(String departName) {
        // 确定是否存在该列
        Stat stat = findByTitle(departName);
        if (stat == null || stat.getId() == null) {
            // 不存在则新增
            stat = new Stat();
            stat.setTitle(departName);
            stat.setType(0);
            stat.setValue(1.0);
        } else {
            // 存在则更新
            stat.setValue(stat.getValue() + 1);
        }
        save(stat);
    }
}
