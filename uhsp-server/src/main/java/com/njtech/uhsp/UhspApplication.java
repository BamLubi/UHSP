package com.njtech.uhsp;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@MapperScan("com.njtech.uhsp.dao")
@EnableCaching
public class UhspApplication {

    public static void main(String[] args) {
        SpringApplication.run(UhspApplication.class, args);
    }

}
