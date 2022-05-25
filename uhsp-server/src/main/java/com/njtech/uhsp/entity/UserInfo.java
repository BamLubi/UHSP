package com.njtech.uhsp.entity;

import lombok.Data;

@Data
public class UserInfo extends BaseEntity{
    private String idCard; // 身份证
    private String wechatOpenid; // 微信openid
    private String medCard; // 医保卡
    private String userName; // 昵称（取自微信名）
    private String realName; // 真实行姓名
    private Integer userType; // 0普通用户、1医生、2管理员
    private Integer age; // 年龄
    private Integer sex; // 0男、1女
    private String phone; // 电话
    private String address; // 地址
}
