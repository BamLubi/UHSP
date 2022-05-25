/*
 Navicat Premium Data Transfer

 Source Server         : 虚拟机
 Source Server Type    : MySQL
 Source Server Version : 50738
 Source Host           : 192.168.248.128:3306
 Source Schema         : uhsp

 Target Server Type    : MySQL
 Target Server Version : 50738
 File Encoding         : 65001

 Date: 23/05/2022 22:45:50
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for depart
-- ----------------------------
DROP TABLE IF EXISTS `depart`;
CREATE TABLE `depart`  (
  `id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '部门id',
  `depart_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '部门名称',
  `details` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '介绍',
  `create_time` datetime(0) NULL DEFAULT NULL,
  `update_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '部门信息表\r\n存储医生所在科室信息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of depart
-- ----------------------------
INSERT INTO `depart` VALUES ('0', '内科', '内科的病种非常广泛，如下：心血管内科，呼吸内科、消化内科、肾内科、内分泌科、血液科、神经内科、神经系统病变。', '2022-05-14 08:10:10', '2022-05-14 08:10:10');
INSERT INTO `depart` VALUES ('1', '外科', '外科看病的范围非常广，主要是需使用外科手术进行治疗的疾病。外科包括骨科、普外科、神经外科、泌尿外科和胸外科等，如果出现了外伤、阑尾炎、胆囊炎、甲状腺、肾结石，或者是腰椎、颈椎等方面的疾病，应该要去外科就诊。', '2022-05-14 08:10:42', '2022-05-14 08:10:42');
INSERT INTO `depart` VALUES ('10', '骨科', '骨科看病的内容相对比较广泛，包括从头到脚骨、关节、韧带、肌肉、肌腱损伤以及无菌性炎症等病变。具体包括以下这些方面：1、脊柱类的疾病。比如腰椎间盘突出、腰椎滑脱、腰椎管狭窄、韧带钙化以及颈椎病等；2、四肢的疾病。比如骨折或者骨质破坏、肌肉的拉伤及断裂、韧带损伤、关节的损伤及炎症等；3、骨盆疾病。比如骨盆骨折、骨盆韧带损伤；4、运动系统疾病。', '2022-05-14 08:10:49', '2022-05-14 08:11:31');
INSERT INTO `depart` VALUES ('11', '耳鼻喉科', '耳鼻喉科一般是看耳鼻咽喉科的先天性疾病、外伤性疾病、普通炎症性疾病以及过敏性疾病、肿瘤等，还有食管、气管疾病。常见的耳部疾病有外耳道炎、外耳道湿疹、外耳道真菌病、中耳炎、胆脂瘤型中耳炎、突发性聋、美尼尔氏病、耳石症、耳部的良性恶性肿瘤、以及先天性疾病引起的耳前瘘管、外耳道狭窄、闭锁、中耳畸形等。常见的鼻部疾病有急性鼻炎、慢性鼻炎、萎缩性鼻炎、干燥性鼻炎、过敏性鼻炎、鼻中隔偏曲、鼻息肉、鼻窦囊肿以及鼻腔鼻窦的良性恶性肿瘤。', '2022-05-14 08:10:50', '2022-05-14 08:11:34');
INSERT INTO `depart` VALUES ('12', '心理健康科', '出现普通心理问题,即不良状态、心理障碍都可以就诊心理科。如果有生活中的苦恼,一些困惑解不清的问题,可以找心理科医生做心理咨询与治疗。如果出现抑郁、焦虑、强迫,甚至抑郁症、焦虑症、强迫症、恐怖症、失眠症等,可以就诊心理科。', '2022-05-14 08:10:51', '2022-05-14 08:11:38');
INSERT INTO `depart` VALUES ('13', '康复科', '各种急慢性损伤，如颈肩腰腿痛、关节扭伤、软组织损伤、落枕、网球肘、急性腰扭伤、腰肌劳损、任何关节炎、腱鞘炎等，都可以在康复科治疗；', '2022-05-14 08:11:47', '2022-05-14 08:11:47');
INSERT INTO `depart` VALUES ('14', '理疗科', '理疗科主要是利用人工或自然界物理因素作用于人体，使之产生有利的反应，达到预防和治疗疾病目的。', '2022-05-14 08:11:54', '2022-05-14 08:11:54');
INSERT INTO `depart` VALUES ('2', '妇产科', '妇科疾病主要看妇科炎症、宫颈疾病、卵巢疾病、不孕不育及月经异常。产科疾病主要看妊娠期疾病、分娩问题、胎盘问题等。', '2022-05-14 08:10:44', '2022-05-14 08:10:56');
INSERT INTO `depart` VALUES ('4', '眼科', '眼科主要看眼部的疾病,包括各种与全身疾病相关的眼病。', '2022-05-14 08:10:45', '2022-05-14 08:11:02');
INSERT INTO `depart` VALUES ('5', '口腔科', '口腔科是看发生在牙齿、牙周组织、牙槽骨、颌骨及颌面部等的疾病。', '2022-05-14 08:10:46', '2022-05-14 08:11:04');
INSERT INTO `depart` VALUES ('7', '皮肤病科', '皮肤科看的病的种类主要就是常见的,或者是罕见的反映在皮肤上面的疾病。通常在临床上包括感染性的皮肤病,还有一些过敏性的,表现在皮肤瘙痒性的一些疾病。另外还有由于因为免疫因素异常、免疫力下降,而导致的皮肤损害,以及一些胶原性的皮肤病,比如红斑狼疮、皮肌炎、重叠综合征等等,还包括各种皮肤肿瘤。 当然除了这些常见的,或者是罕见的一些皮肤病之外,也可以看性传播疾病。', '2022-05-14 08:10:46', '2022-05-14 08:11:11');
INSERT INTO `depart` VALUES ('8', '中医科', '目前中医科分科比较细,分为中医内科、中医外科、中医妇科、中医儿科、针灸科、中医肾病科、中医五官科、中医消化内科等。 所以临床很多疾病,比如腰痛、头痛、腹痛、胃痛、女性月经不调、乳腺炎、乳腺增生、闭经、不孕不育、男性前列腺炎、前列腺增生等,都可以用中医进行治疗,而且效果非常不错。', '2022-05-14 08:10:46', '2022-05-14 08:11:15');
INSERT INTO `depart` VALUES ('9', '感染病科', '感染科主要收治各种感染性疾病的患者，感染性疾病是指由各种病原体感染所导致的疾病，包括传染性疾病和非传染性的感染性疾病。', '2022-05-14 08:10:47', '2022-05-14 08:11:28');
INSERT INTO `depart` VALUES ('999', '检查', '血常规检测、核酸检测等。', '2022-05-18 09:38:32', '2022-05-18 09:38:35');

-- ----------------------------
-- Table structure for doctor
-- ----------------------------
DROP TABLE IF EXISTS `doctor`;
CREATE TABLE `doctor`  (
  `id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户id',
  `depart_id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '部门id、外键',
  `rank_id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '医生职称、外键',
  `introduce` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '简介',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime(0) NULL DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `rank_id`(`rank_id`) USING BTREE,
  INDEX `depart_id`(`depart_id`) USING BTREE,
  CONSTRAINT `depart_id` FOREIGN KEY (`depart_id`) REFERENCES `depart` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION,
  CONSTRAINT `rank_id` FOREIGN KEY (`rank_id`) REFERENCES `rank` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '医生信息表\r\n记录医生所在的部门和职称等信息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of doctor
-- ----------------------------
INSERT INTO `doctor` VALUES ('000000000000001', '999', '991', '血常规', '2022-05-18 09:41:05', '2022-05-18 09:41:07');
INSERT INTO `doctor` VALUES ('000000000000002', '999', '992', '核酸检测', '2022-05-18 09:41:48', '2022-05-18 09:41:50');
INSERT INTO `doctor` VALUES ('202205141636001', '0', '1', '主治呼吸内科', '2022-05-14 08:40:54', '2022-05-14 08:40:54');
INSERT INTO `doctor` VALUES ('202205181245002', '0', '3', '主治心血管疾病', '2022-05-18 12:47:27', '2022-05-18 12:47:29');
INSERT INTO `doctor` VALUES ('202205232232003', '1', '3', NULL, '2022-05-23 22:34:29', '2022-05-23 22:34:32');
INSERT INTO `doctor` VALUES ('202205232234004', '5', '2', NULL, '2022-05-23 22:35:46', '2022-05-23 22:35:49');

-- ----------------------------
-- Table structure for drug
-- ----------------------------
DROP TABLE IF EXISTS `drug`;
CREATE TABLE `drug`  (
  `id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '药品id',
  `drug_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '药品名称',
  `unit` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '计量单位',
  `price` decimal(10, 2) NULL DEFAULT 0.00 COMMENT '价格',
  `details` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '药品详情',
  `stocks` int(10) NULL DEFAULT 0 COMMENT '库存',
  `create_time` datetime(0) NULL DEFAULT NULL,
  `update_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '药品信息表，管理员有权限添加药品信息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of drug
-- ----------------------------
INSERT INTO `drug` VALUES ('0', '复方维A酸软膏', '瓶', 22.00, '[成分]xxxx', 100, '2022-05-14 08:18:02', '2022-05-14 08:18:02');
INSERT INTO `drug` VALUES ('1', '复方咪康唑软膏', '瓶', 30.00, '[性状]xxx', 100, '2022-05-14 08:18:05', '2022-05-14 08:18:49');

-- ----------------------------
-- Table structure for inspection
-- ----------------------------
DROP TABLE IF EXISTS `inspection`;
CREATE TABLE `inspection`  (
  `id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `registry_id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '挂号单id',
  `details` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '检查结果',
  `status` int(2) NULL DEFAULT NULL COMMENT '状态：0未完成、1完成',
  `create_time` datetime(0) NULL DEFAULT NULL,
  `update_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `registry_id_inspection`(`registry_id`) USING BTREE,
  CONSTRAINT `registry_id_inspection` FOREIGN KEY (`registry_id`) REFERENCES `registry` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '检查表\r\n抽血、核算检测等\r\n绑定挂号单id' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for medins
-- ----------------------------
DROP TABLE IF EXISTS `medins`;
CREATE TABLE `medins`  (
  `id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户id',
  `prescription_id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '处方id',
  `price` decimal(10, 2) NULL DEFAULT NULL COMMENT '报销价格',
  `status` int(1) NULL DEFAULT NULL COMMENT '状态：0报销中、1报销成功',
  `create_time` datetime(0) NULL DEFAULT NULL,
  `update_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id_medins`(`user_id`) USING BTREE,
  INDEX `regisry_id_medins`(`prescription_id`) USING BTREE,
  CONSTRAINT `regisry_id_medins` FOREIGN KEY (`prescription_id`) REFERENCES `prescription` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION,
  CONSTRAINT `user_id_medins` FOREIGN KEY (`user_id`) REFERENCES `user_info` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '医保报销表\r\n这里只报销处方单中的药品\r\n状态：0报销中、1报销成功' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of medins
-- ----------------------------
INSERT INTO `medins` VALUES ('81f270e7a14a4959be08d561cc0c7b4b', '8e38226437584022ad5aee997a8f459a', NULL, 22.00, 1, '2022-05-21 07:07:03', '2022-05-21 07:07:03');

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news`  (
  `id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '标题',
  `details` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '内容',
  `type` int(1) NULL DEFAULT NULL COMMENT '类型：0公告、1健康信息',
  `create_time` datetime(0) NULL DEFAULT NULL,
  `update_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '新闻表\r\n存储公告、健康信息等内容\r\n类型：0公告、1健康信息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES ('0', '关于丁家桥校区医疗费报销地点调整的通知', '各位师生：\r\n\r\n原定于5月9日在丁家桥校区医务室进行医疗费报销，现因疫情防控要求，地点调整为丁家桥教学区科技创新大楼AB楼大厅，为此给大家带来的不便敬请谅解。\r\n\r\n特此通知，并请相互转告。', 0, '2022-05-14 00:00:00', '2022-05-14 00:00:00');
INSERT INTO `news` VALUES ('1', '各位师生：\r\n\r\n原定于5月9日在丁家桥校区医务室进行医疗费报销，现因疫情防控要求，地点调整为丁家桥教学区科技创新大楼AB楼大厅，为此给大家带来的不便敬请谅解。\r\n\r\n特此通知，并请相互转告。', '各位师生：\r\n\r\n即日起江浦校区医务室恢复诊疗工作。\r\n\r\n丁家桥校区医务室5月3日起每周二、周四开诊。', 0, '2022-05-15 22:28:36', '2022-05-16 22:28:39');

-- ----------------------------
-- Table structure for prescription
-- ----------------------------
DROP TABLE IF EXISTS `prescription`;
CREATE TABLE `prescription`  (
  `id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `patient_id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '患者id',
  `registry_id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '挂号id',
  `details` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '处方信息',
  `drugs` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '药品信息',
  `price` decimal(10, 2) NULL DEFAULT NULL COMMENT '药品总价格',
  `status` int(1) NULL DEFAULT NULL COMMENT '状态：0未付款、1付款、2已提交报销',
  `charge_time` datetime(0) NULL DEFAULT NULL,
  `create_time` datetime(0) NULL DEFAULT NULL,
  `update_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `registry_id_prescription`(`registry_id`) USING BTREE,
  INDEX `patient_id_pres`(`patient_id`) USING BTREE,
  CONSTRAINT `patient_id_pres` FOREIGN KEY (`patient_id`) REFERENCES `user_info` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION,
  CONSTRAINT `registry_id_prescription` FOREIGN KEY (`registry_id`) REFERENCES `registry` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '处方表\r\n在drugs中直接记录要用到的所有药品，并计算总价格' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for rank
-- ----------------------------
DROP TABLE IF EXISTS `rank`;
CREATE TABLE `rank`  (
  `id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '医生职称：0住院医师、1主治医师、2副主任医师、3主任医师',
  `rank_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '职称名称',
  `price` decimal(10, 2) UNSIGNED NULL DEFAULT 0.00 COMMENT '费用',
  `create_time` datetime(0) NULL DEFAULT NULL,
  `update_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of rank
-- ----------------------------
INSERT INTO `rank` VALUES ('0', '住院医师', 10.00, '2022-05-16 19:25:54', '2022-05-16 19:25:54');
INSERT INTO `rank` VALUES ('1', '主治医师', 10.00, '2022-05-16 19:25:54', '2022-05-16 19:25:54');
INSERT INTO `rank` VALUES ('2', '副主任医师', 15.00, '2022-05-16 19:25:54', '2022-05-16 19:25:54');
INSERT INTO `rank` VALUES ('3', '主任医师', 20.00, '2022-05-16 19:25:54', '2022-05-16 19:25:54');
INSERT INTO `rank` VALUES ('99', '检查', 0.00, '2022-05-16 19:25:54', '2022-05-16 19:25:58');
INSERT INTO `rank` VALUES ('991', '血常规', 20.00, '2022-05-18 09:40:05', '2022-05-18 09:40:07');
INSERT INTO `rank` VALUES ('992', '核酸检测', 50.00, '2022-05-18 09:40:19', '2022-05-18 09:40:21');

-- ----------------------------
-- Table structure for registry
-- ----------------------------
DROP TABLE IF EXISTS `registry`;
CREATE TABLE `registry`  (
  `id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '挂号单id',
  `patient_id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '病人id',
  `doctor_id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '医生id',
  `depart_id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '部门id',
  `time` int(1) NULL DEFAULT NULL COMMENT '0上午场或1下午场',
  `status` int(1) NULL DEFAULT NULL COMMENT '挂号状态：0未付款、1已付款、2已取消、3已完成',
  `register_fee` decimal(10, 2) NULL DEFAULT NULL COMMENT '挂号费用',
  `charge_time` datetime(0) NULL DEFAULT NULL,
  `create_time` datetime(0) NULL DEFAULT NULL,
  `update_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `patient_id_registry`(`patient_id`) USING BTREE,
  INDEX `doctor_id_registry`(`doctor_id`) USING BTREE,
  INDEX `depart_id_registry`(`depart_id`) USING BTREE,
  CONSTRAINT `depart_id_registry` FOREIGN KEY (`depart_id`) REFERENCES `depart` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION,
  CONSTRAINT `doctor_id_registry` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION,
  CONSTRAINT `patient_id_registry` FOREIGN KEY (`patient_id`) REFERENCES `user_info` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '挂号表\r\n通过挂号表id可以查询相应的检查单和处方表等信息，一对多\r\n挂号状态：0未付款、1付款' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of registry
-- ----------------------------
INSERT INTO `registry` VALUES ('7663a498c0ef4ec5888679c164ae38cb', '8e38226437584022ad5aee997a8f459a', '202205141636001', '0', 1, 0, 10.00, NULL, '2022-05-23 14:43:13', '2022-05-23 14:43:13');
INSERT INTO `registry` VALUES ('b7b837a0dd0a48cca7fb9b15e890be4c', '8e38226437584022ad5aee997a8f459a', '202205232232003', '1', 0, 0, 20.00, NULL, '2022-05-23 14:42:49', '2022-05-23 14:42:49');
INSERT INTO `registry` VALUES ('baf33c7c057f439980b555715cb05b01', '8e38226437584022ad5aee997a8f459a', '202205232234004', '5', 0, 0, 15.00, NULL, '2022-05-23 14:43:04', '2022-05-23 14:43:04');
INSERT INTO `registry` VALUES ('f6a7f8fd27444abb871567d231f18046', '8e38226437584022ad5aee997a8f459a', '202205141636001', '0', 0, 0, 10.00, NULL, '2022-05-23 14:32:04', '2022-05-23 14:32:04');

-- ----------------------------
-- Table structure for schedule
-- ----------------------------
DROP TABLE IF EXISTS `schedule`;
CREATE TABLE `schedule`  (
  `id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `doctor_id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `day` int(1) NULL DEFAULT NULL COMMENT '值班时间：1-7周一-周日',
  `remain_am` int(10) UNSIGNED NULL DEFAULT 0 COMMENT '上午剩余号',
  `remain_pm` int(10) UNSIGNED NULL DEFAULT 0 COMMENT '下午剩余号',
  `default_remain_am` int(10) UNSIGNED NULL DEFAULT 0 COMMENT '默认上午剩余号',
  `default_remain_pm` int(10) UNSIGNED NULL DEFAULT 0 COMMENT '默认下午剩余号',
  `update_time` datetime(0) NULL DEFAULT NULL,
  `create_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `doctor_id`(`doctor_id`) USING BTREE,
  CONSTRAINT `doctor_id` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '医生排班表\r\n值班时间：1-7周一-周日' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of schedule
-- ----------------------------
INSERT INTO `schedule` VALUES ('0001', '202205141636001', 1, 50, 50, 50, 50, '2022-05-14 12:11:35', '2022-05-14 10:59:47');
INSERT INTO `schedule` VALUES ('0002', '202205141636001', 4, 40, 40, 40, 40, '2022-05-14 12:11:35', '2022-05-14 11:01:39');
INSERT INTO `schedule` VALUES ('0003', '202205141636001', 6, 50, 50, 50, 50, '2022-05-14 12:11:35', '2022-05-14 11:02:29');
INSERT INTO `schedule` VALUES ('0004', '202205141636001', 2, 30, 20, 30, 20, '2022-05-18 13:03:15', '2022-05-18 13:03:16');
INSERT INTO `schedule` VALUES ('0005', '202205141636001', 3, 20, 20, 20, 20, '2022-05-18 13:03:10', '2022-05-18 13:03:12');
INSERT INTO `schedule` VALUES ('0006', '202205141636001', 5, 40, 40, 40, 40, '2022-05-18 13:03:06', '2022-05-18 13:03:08');
INSERT INTO `schedule` VALUES ('0007', '202205181245002', 4, 20, 20, 20, 20, '2022-05-18 13:03:39', '2022-05-18 13:03:42');
INSERT INTO `schedule` VALUES ('0008', '202205181245002', 3, 40, 40, 40, 40, '2022-05-18 13:38:33', '2022-05-18 13:38:35');
INSERT INTO `schedule` VALUES ('0009', '202205232232003', 1, 10, 10, 10, 10, '2022-05-23 22:36:41', '2022-05-23 22:36:43');
INSERT INTO `schedule` VALUES ('0010', '202205181245002', 2, 10, 10, 10, 10, '2022-05-23 22:37:31', '2022-05-23 22:37:33');
INSERT INTO `schedule` VALUES ('0011', '202205232232003', 3, 10, 10, 10, 10, '2022-05-23 22:42:01', '2022-05-23 22:42:03');
INSERT INTO `schedule` VALUES ('0012', '202205232232003', 4, 10, 10, 10, 10, '2022-05-23 22:42:05', '2022-05-23 22:42:06');
INSERT INTO `schedule` VALUES ('0013', '202205232232003', 5, 10, 10, 10, 10, '2022-05-23 22:42:09', '2022-05-23 22:42:09');
INSERT INTO `schedule` VALUES ('0014', '202205232232003', 6, 10, 10, 10, 10, '2022-05-23 22:42:11', '2022-05-23 22:42:12');
INSERT INTO `schedule` VALUES ('0015', '202205232232003', 7, 10, 10, 10, 10, '2022-05-23 22:42:14', '2022-05-23 22:42:16');
INSERT INTO `schedule` VALUES ('0016', '202205232234004', 1, 10, 10, 10, 10, '2022-05-23 22:42:17', '2022-05-23 22:42:18');
INSERT INTO `schedule` VALUES ('0017', '202205232234004', 2, 10, 10, 10, 10, '2022-05-23 22:42:19', '2022-05-23 22:42:21');
INSERT INTO `schedule` VALUES ('0018', '202205232234004', 3, 10, 10, 10, 10, '2022-05-23 22:42:23', '2022-05-23 22:42:24');
INSERT INTO `schedule` VALUES ('0019', '202205232234004', 4, 10, 10, 10, 10, '2022-05-23 22:42:26', '2022-05-23 22:42:27');
INSERT INTO `schedule` VALUES ('0020', '202205232234004', 5, 10, 10, 10, 10, '2022-05-23 22:42:28', '2022-05-23 22:42:29');
INSERT INTO `schedule` VALUES ('0021', '202205232234004', 6, 10, 10, 10, 10, '2022-05-23 22:42:31', '2022-05-23 22:42:32');
INSERT INTO `schedule` VALUES ('0022', '202205232234004', 7, 10, 10, 10, 10, '2022-05-23 22:42:33', '2022-05-23 22:42:36');

-- ----------------------------
-- Table structure for stat
-- ----------------------------
DROP TABLE IF EXISTS `stat`;
CREATE TABLE `stat`  (
  `id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '统计参数名称',
  `details` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '统计参数具体信息',
  `type` int(1) NULL DEFAULT NULL COMMENT '统计类型：0各科室就诊人数',
  `value` decimal(10, 4) NULL DEFAULT NULL COMMENT '值',
  `create_time` datetime(0) NULL DEFAULT NULL,
  `update_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '统计表\r\n用于记录相关统计信息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of stat
-- ----------------------------
INSERT INTO `stat` VALUES ('3695c1e14eb74df3af4dc16e49850b92', '口腔科', NULL, 0, 1.0000, '2022-05-23 14:43:04', '2022-05-23 14:43:04');
INSERT INTO `stat` VALUES ('8ae1243793154b10abaa1b0cadc90da2', '内科', NULL, 0, 2.0000, '2022-05-23 14:32:04', '2022-05-23 14:43:13');
INSERT INTO `stat` VALUES ('aff40d0680374cdb8ad3785e2d094872', '外科', NULL, 0, 1.0000, '2022-05-23 14:42:49', '2022-05-23 14:42:49');

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info`  (
  `id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户ID',
  `id_card` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '身份证号码',
  `wechat_openid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '微信小程序openid',
  `med_card` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '医保卡',
  `user_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '昵称',
  `real_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '真实姓名',
  `user_type` int(2) NULL DEFAULT 0 COMMENT '用户身份：0普通用户，1医生，2管理员',
  `age` int(2) NULL DEFAULT NULL COMMENT '年龄',
  `sex` int(1) NULL DEFAULT NULL COMMENT '性别：0男，1女',
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '电话号码',
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '地址',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime(0) NULL DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `med_card`(`med_card`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '用户信息表\r\n存储用户的基本信息，这里的用户主要有三种：\r\n- 普通用户 ： user_type = 0\r\n- 医生 ： user_type = 1\r\n- 管理员 ： user_type = 2\r\n\r\n对于医生需要去医生信息表，查询具体的医生个人信息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES ('202205141636001', '12345673', '2134', '12324', 'zhangsan', '张三', 1, 35, 0, NULL, NULL, '2022-05-14 08:37:13', '2022-05-14 08:37:13');
INSERT INTO `user_info` VALUES ('202205181245002', '1231231', '124241231', '1314', 'lisi', '李四', 1, 42, 0, NULL, NULL, '2022-05-18 12:46:22', '2022-05-18 12:46:24');
INSERT INTO `user_info` VALUES ('202205232232003', '1231234', '2314123', '1412123', 'wangwu', '王五', 1, 56, 1, NULL, NULL, '2022-05-23 22:33:22', '2022-05-23 22:33:24');
INSERT INTO `user_info` VALUES ('202205232234004', '124123', '141215', '123154213', 'zhaoliu', '赵六', 1, 42, 1, NULL, NULL, NULL, NULL);
INSERT INTO `user_info` VALUES ('8e38226437584022ad5aee997a8f459a', '13246798987654', 'oYoPa5PbrlDG65BCaI9qoEwLYE9E', '131975364821346', '小陆斑比', '陆于洋', 2, 23, 0, '13616546215', '测试地址XXXXX', '2022-05-16 12:55:07', '2022-05-16 14:00:31');

-- ----------------------------
-- Function structure for reset_remain
-- ----------------------------
DROP FUNCTION IF EXISTS `reset_remain`;
delimiter ;;
CREATE DEFINER=`root`@`%` FUNCTION `reset_remain`() RETURNS int(11)
BEGIN
	#Routine body goes here...
	UPDATE `schedule`
	SET
	`schedule`.remain_am = `schedule`.default_remain_am,
	`schedule`.remain_pm = `schedule`.default_remain_pm;
	RETURN 0;
END
;;
delimiter ;

-- ----------------------------
-- Event structure for reset_remain
-- ----------------------------
DROP EVENT IF EXISTS `reset_remain`;
delimiter ;;
CREATE DEFINER = `root`@`%` EVENT `reset_remain`
ON SCHEDULE
EVERY '24' HOUR STARTS '2022-05-15 00:00:00'
COMMENT '定时重置每日预约余量'
DO CALL reset_remain()
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
