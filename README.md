# 校医院服务平台

> University Hospital Service Platform: UHSP
>
> 基于Springboot的后端服务，基于微信小程序的前端服务。普通用户、医生、管理员三端统一，使用微信的唯一标识符openid实现免密登录。

## 目录结构

```shell
├── uhsp-server	# 服务端代码-IDEA
├── uhsp-wechat # 微信小程序端代码
├── uhsp.sql	# 数据库建表
├── uhsp数据库模型v3.1.svg # 数据库模型
├── README.md
```

## 效果图

![052522321151_01](.\img\052522321151_01.png)

## 需求分析

- 普通用户
  - 预约挂号管理
  - 取药结算
  - 查看公告和健康知识
  - 个人信息管理
  - 查询验血、核酸检测结果等
  - 查询医保进度等
- 医生
  - 在线诊断、开局药方
- 管理员
  - 发布健康公告
  - 上传医保报销进度
  - 问诊数据统计，生成报表并发布

## 数据库设计

- [x] 用户表 - user_info ：存储用户的基本信息
- [x] 医生表 - doctor : 存储医生的基本信息
- [x] 部门信息表 - depart : 存储门诊分类
- [x] 职称表 - rank ： 职称信息，挂号费用等
- [x] 排班表 - schedule : 存储医生的排班信息
- [x] 挂号表 - registry : 存储挂号信息
- [x] 新闻表 - news : 公告、健康信息等
- [x] 检查表 - inspection : 抽血、核酸检测等检查
- [x] 药品表 - drug : 药品信息
- [x] 处方表 - prescription : 药方信息，与药品和号绑定
- [x] 统计表 - stat : 统计信息
- [x] 医保报销表 - medins : 医保进度

### 每天重置预约次数

```sql
## 设置定时任务开启
SET GLOBAL event_scheduler = 1
```

函数:reset_remain。重置每个医生的每日门诊余量

```sql
CREATE DEFINER=`root`@`%` FUNCTION `reset_remain`() RETURNS int(11)
BEGIN
	#Routine body goes here...
	UPDATE `schedule`
	SET
	`schedule`.remain_am = `schedule`.default_remain_am,
	`schedule`.remain_pm = `schedule`.default_remain_pm;
	RETURN 0;
END
```

## 模块设计

用户信息管理模块：

1. 登陆注册功能，（微信小程序提供用户唯一opneid，因此可以基于该openid实现系统的无密码登录）
2. 用户信息更新
3. 用户权限管理

挂号管理模块：

1. 患者挂号，建立挂号单
2. 医生会诊，建立处方单

缴费报销模块：

1. 挂号单缴费
2. 处方单缴费
3. 医保报销

其他管理模块：

1. 药品管理
2. 科室信息管理
3. 医生排班管理
4. 职称信息管理
5. 公告管理
6. 统计信息管理
