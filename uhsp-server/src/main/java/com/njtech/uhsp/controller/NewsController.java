package com.njtech.uhsp.controller;

import com.njtech.uhsp.entity.News;
import com.njtech.uhsp.service.NewsService;
import com.njtech.uhsp.utils.Result;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("/news")
public class NewsController {
    @Autowired
    private NewsService newsService;

    @PostMapping("/insert")
    public Result<Void> insert(@RequestBody News news){
        newsService.save(news);
        return Result.SUCCESS_RESULT;
    }

    @GetMapping("")
    public List<News> findAll(){
        return newsService.findAll();
    }
}
