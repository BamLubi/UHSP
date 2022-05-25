package com.njtech.uhsp.entity;

import lombok.Data;

@Data
public class Stat extends BaseEntity{
    private String title;
    private String details;
    private Integer type; // 统计类型：0各科室就诊人数
    private Double value;
}
