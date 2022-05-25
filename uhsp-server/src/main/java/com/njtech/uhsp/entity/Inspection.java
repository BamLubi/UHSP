package com.njtech.uhsp.entity;

import lombok.Data;

@Data
public class Inspection extends BaseEntity{
    private String registryId; // 挂号单id
    private String details; // 检查结果
    private Integer status; // 状态：0未完成、1完成
    private UserInfo patient; // 患者基本信息
    private Doctor doctor; // 检查项目
}
