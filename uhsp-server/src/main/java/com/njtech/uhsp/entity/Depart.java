package com.njtech.uhsp.entity;

import lombok.Data;

@Data
public class Depart extends BaseEntity {
    private String departName; // 部门名称，其中包括检查这一特殊部门
    private String details; // 介绍
}
