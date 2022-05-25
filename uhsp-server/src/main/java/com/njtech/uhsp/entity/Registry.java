package com.njtech.uhsp.entity;

import lombok.Data;

import java.util.Date;

@Data
public class Registry extends BaseEntity{
    private String patientId; // 用户id
    private String doctorId; // 医生id
    private String departId; // 部门id
    private Integer time; // 0上午场、1下午场
    private Integer status; // 状态：0未付款、1付款
    private Double registerFee; // 挂号费用
    private Date chargeTime; // 付费时间
    private UserInfo doctor;
    private UserInfo patient;
    private Depart depart;
    private Rank rank;
}
