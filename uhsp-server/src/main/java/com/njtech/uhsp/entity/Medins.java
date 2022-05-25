package com.njtech.uhsp.entity;

import lombok.Data;

@Data
public class Medins extends BaseEntity{
    private String userId; // 用户id
    private String prescriptionId; // 处方id
    private Double price; // 价格
    private Integer status; // 状态
    private Prescription prescription; // 处方信息
}
