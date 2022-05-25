package com.njtech.uhsp.entity;

import lombok.Data;

import java.util.Date;

@Data
public class Prescription extends BaseEntity{
    private String patientId; // 患者id
    private String registryId; // 挂号单id
    private String details; // 医嘱
    private String drugs; // 药品
    private Double price; // 总价格
    private Integer status; // 状态
    private Date chargeTime; // 付费时间
    private UserInfo doctor;
    private Depart depart;
    private Rank rank;
}
