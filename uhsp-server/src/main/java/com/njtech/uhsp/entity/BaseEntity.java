package com.njtech.uhsp.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.njtech.uhsp.utils.IdGen;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

@Data
public class BaseEntity implements Serializable {
    @TableId(type = IdType.ASSIGN_ID)
    protected String id;

    protected Date createTime;
    protected Date updateTime;

    /**
     * 插入之前完成的动作：添加ID，创建更新时间
     */
    public void preInsert(IdGen idGen){
        this.id = idGen.genId() + "";
        this.createTime = new Date();
        this.updateTime = new Date();
    }

    /**
     * 更新一下时间
     */
    public void preUpdate(){
        this.updateTime = new Date();
    }
}
