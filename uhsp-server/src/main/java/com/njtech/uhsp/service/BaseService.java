package com.njtech.uhsp.service;

import com.njtech.uhsp.dao.BaseDao;
import com.njtech.uhsp.entity.BaseEntity;
import com.njtech.uhsp.utils.IdGen;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.UUID;


@Slf4j
public class BaseService<D extends BaseDao<E>, E extends BaseEntity> {
    @Autowired
    protected D dao;

    protected IdGen idGen = () -> UUID.randomUUID().toString().replaceAll("-", "");

    public void insertMany(List<E> list) {
        this.insertMany(list, idGen);
    }

    public void insertMany(List<E> list, IdGen idGen) {
        list.forEach(m -> m.preInsert(idGen));
        dao.insertMany(list);
    }

    public void delete(E condition) {
        dao.delete(condition);
    }

    public void deleteById(String id) {
        dao.deleteById(id);
    }

    public E find(E condition) {
        return dao.find(condition);
    }

    public E findById(String id) {
        return dao.findById(id);
    }

    public List<E> findList(E condition) {
        return dao.findList(condition);
    }

    public List<E> findAll() {
        return dao.findAll();
    }

    public void save(E e, IdGen idGen) {
        if (e.getId() == null || "".equals(e.getId())) {
            //插入
            e.preInsert(idGen);
            dao.insert(e);
        } else {
            //更新
            e.preUpdate();
            dao.update(e);
        }
    }

    public void save(E e) {
        this.save(e, idGen);
    }

}
