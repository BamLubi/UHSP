package com.njtech.uhsp.entity;

import lombok.Data;

@Data
public class Drug extends BaseEntity{
    private String drugName;
    private String unit;
    private Double price;
    private String details;
    private Integer stocks;
}
