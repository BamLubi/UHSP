package com.njtech.uhsp.entity;

import lombok.Data;

@Data
public class News extends BaseEntity{
    private String title; // 标题
    private String details; // 内容
    private Integer type; // 类型：0公告、1健康知识
}
