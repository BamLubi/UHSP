package com.njtech.uhsp.entity;

import lombok.Data;

@Data
public class Schedule extends BaseEntity{
    private String doctorId; // 医生id
    private Integer day; // 值班星期
    private Integer remainAm; // 上午余量
    private Integer remainPm; // 下午余量
    private Integer defaultRemainAm; // 默认上午余量
    private Integer defaultRemainPm; // 默认下午余量
}
