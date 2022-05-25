package com.njtech.uhsp.entity;

import lombok.Data;

import java.util.List;

@Data
public class Doctor extends BaseEntity{
    private String departId;
    private String rankId;
    private String introduce;
    private Depart depart;
    private Rank rank;
    private UserInfo userInfo;
    private Schedule schedule;
}
