package com.njtech.uhsp.controller;

import com.njtech.uhsp.entity.UserInfo;
import com.njtech.uhsp.service.UserInfoService;
import com.njtech.uhsp.utils.Result;
import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@Slf4j
public class UserInfoController {
    @Autowired
    private UserInfoService userInfoService;

    @PostMapping("/update")
    public Result<Void> update(@RequestBody UserInfo userInfo){
        userInfoService.save(userInfo);
        return Result.SUCCESS_RESULT;
    }

    @PostMapping("/insert")
    public Result<Void> insert(@RequestBody UserInfo userInfo){
        userInfoService.save(userInfo);
        return Result.SUCCESS_RESULT;
    }

    @PostMapping("/find")
    public UserInfo find(@RequestBody UserInfo userInfo){
        return userInfoService.find(userInfo);
    }
}
