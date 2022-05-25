package com.njtech.uhsp.entity;

import lombok.Data;

@Data
public class Rank extends BaseEntity{
    private String rankName; // 职称名称
    private Double price; // 费用
}