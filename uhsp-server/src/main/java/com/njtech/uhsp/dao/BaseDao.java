package com.njtech.uhsp.dao;

import com.njtech.uhsp.entity.BaseEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

public interface BaseDao<E extends BaseEntity> {
    void insert(E e);
    void insertMany(List<E> list);
    void delete(E condition);
    void deleteById(String id);
    void update(E e);
    E find(E condition);
    E findById(String id);
    List<E> findList(E condition);
    List<E> findAll();
}
