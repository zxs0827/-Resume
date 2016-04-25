var Language = function() {};

Language.prototype = {
    //language - chinese
    zh_CN: {
        /*--------*/
        /* footer */
        /*--------*/
        FOOTER_INFO_CHOICE: "选择",
        FOOTER_INFO_DOT: "，",
        FOOTER_INFO_PRESS: "按",
        FOOTER_INFO_PAGE: "翻页",
        FOOTER_INFO_OK: "确定",
        FOOTER_INFO_RETURN_LEVEL: "返回上一级",
        FOOTER_INFO_RETURN_HOME: "返回首页",
        /*--------------*/
        /* welcome.html */
        /*--------------*/
        WELCOME_H1: "尊敬的张先生：",
        WELCOME_HYC: "诚挚欢迎阁下下榻本酒店。仅代表酒店全体员工衷心祝您在本酒店拥有一段温馨愉快，难以忘怀的旅居体验。我们将倾情为您提供满意而舒适的服务，为您带来豪华至尊礼遇。",
        /*------------*/
        /* index.html */
        /*------------*/
        INDEX_MY_HOTEL: "我的酒店",
        INDEX_KEFANG_YULE: "客房娱乐",
        INDEX_HETEL_SERVICE: "酒店服务",
        INDEX_TRL_HELP: "旅行助手",
        INDEX_MORE_SET: "更多设置",
        /*------------*/
        /* language.html */
        /*------------*/
        LANGUAGE: "语言设置",
        LANGUAGE_WARN: "注意：请按ok键确认。",
        /*--------------*/
        /* setting.html */
        /*--------------*/
        SETTING: "更多设置",
        SETTING_PIN: "PIN 修改",
        SETTING_LANGUAGE: "语言设置",
        /*----------*/
        /* pin.html */
        /*----------*/
        PIN: "PIN码设置",
        PIN_OLD: "旧PIN码：",
        PIN_NEW: "新PIN码：",
        PIN_INFO: "请按 OK 键确认。",
        PIN_WARN: "注意：初始PIN码为房间号,请按数字键输入。",
        PIN_SUCCESS: "PIN 设置成功",
        PIN_FAIL_OLD: "旧PIN码输入错误，请从新输入",
        PIN_EMPTY_NEW: "新PIN码不能为空",
        /*-------------*/
        /* helper.html */
        /*-------------*/
        HELPER: "旅行助手",
        HELPER_WEATHER: "天气预报",
        HELPER_TIME: "世界时间",
        HELPER_TRAIN: "高铁信息",
        HELPER_PLANE: "机票预订",
        HELPER_MONEY: "货币汇率",
        HELPER_HOURSER: "房客信息",
        HELPER_GROUPER: "团客信息",
        HELPER_SCENERY: "旅游景点",
        /*---------------*/
        /* my-hotel.html */
        /*---------------*/
        MY_HOTEL: "我的酒店",
        MH_INFORMATION: "集团介绍",
        MH_HOTEL: "酒店介绍",
        MH_TV: "电视直播",
        MH_BILL: "我的账单",
        /*-------------------*/
        /* entertaiment.html */
        /*-------------------*/
        ENTERTAIMENT: "客房娱乐",
        ETM_MUSIC: "在线音乐",
        ETM_MOVIE: "影视风云",
        ETM_ONLINE: "在线广播",
        ETM_APP: "多屏互动",
        /*--------------*/
        /* service.html */
        /*--------------*/
        SERVICE: "酒店服务",
        SVC_SERVICE: "客房服务",
        SVC_RENTCAR: "租车服务",
        SVC_DINNER: "客房订餐",
        SVC_SHOPPING: "客房购物",
        /*------------*/
        /* money.html */
        /*------------*/
        MONEY: "货币汇率",
        MONEY_ZHZSJ: "中行折算价",
        MONEY_WARN: "货币汇率信息仅供参考，请与酒店前台确认实时汇率信息。",
        MNY_TEXT_2: "外币兑换：",
        /*-----------*/
        /* time.html */
        /*-----------*/
        TIME: "世界时间",
        /*-------------------*/
        /* room-service.html */
        /*-------------------*/
        ROOM_SERVICE: "客房服务",
        RM_MJ: "毛巾",
        RM_ZT: "枕头",
        RM_YJ: "衣架",
        RM_YZ: "烟盅",
        RM_ZJ: "面巾",
        RM_YS: "牙具",
        RM_MY: "沐浴",
        /*-------*/
        /* hotel */
        /*-------*/
        HOTEL: "酒店介绍",
        HOTEL_JDJS: "酒店介绍",
        HOTEL_KFJS: "客房介绍",
        HOTEL_HYSS: "会议设施",
        HOTEL_CTJS: "餐厅介绍",
        HOTEL_WDZD: "我的账单",
        HOTEL_AQXZ: "安全须知",
        HOTEL_FWML: "服务目录",
        /*------------*/
        /* plane.html */
        /*------------*/
        PLANE: "航班信息",
        PLANE_LEAVE: "飞机出港",
        PLANE_PORT: "飞机进港",
        PLANE_NUMBER: "航班号",
        PLANE_MODEL: "机型",
        PLANE_DESTINATION: "目的地",
        PLANE_WAIT: "候机楼",
        PLANE_START: "起飞时间",
        PLANE_END: "降落时间",
        /*------------*/
        /* train.html */
        /*------------*/
        TRAIN: "高铁信息",
        TRAIN_NUM: "车次/车型",
        TRAIN_LEAVE: "发站",
        TRAIN_PORT: "到站",
        TRAIN_START: "发时",
        TRAIN_END: "到时",
        TRAIN_TOTAL: "运行时间",
        /*--------------*/
        /* grouper.hmtl */
        /*--------------*/
        GROUPER: "团客信息",
        GROUPER_ROUTES: "团客行程",
        GROUPER_LIST: "团客名单",
        GROUPER_TKXM: "团客姓名",
        GROUPER_FH: "房号",
        GROUPER_TEL: "客房电话",
        /*------------*/
        /* rentcar.html */
        /*------------*/
        RENTCAR: '租车服务',
        CAR_CHOSE: '选择车型',
        CAR_RULES: '计价规则',
        CAR_BRAND: '品牌',
        CAR_MODELS: '车型',
        CAR_TYPE: '类型',
        CAR_PRICE: '价格/天(RMB)',
        /*------------*/
        /* bill.html */
        /*------------*/
        MY_BILL: "我的账单",
        CONSUME_DATE: "消费时间",
        CONSUME_DETAILS: "明细",
        CONSUME_MONEY: "金额",
        /*-------------*/
        /* houser.html */
        /*-------------*/
        HOUSER: "客房消息",
        HOUSER_STATE: "状态",
        HOUSER_DATE: "日期",
        HOUSER_H: "标题",
        HOUSER_SOURCE: "来源",

        WEATHER_0: "晴",
        WEATHER_1: "多云",
        WEATHER_2: "阴",
        WEATHER_3: "阵雨",
        WEATHER_4: "雷阵雨",
        WEATHER_5: "雷阵雨伴有冰雹",
        WEATHER_6: "雨夹雪",
        WEATHER_7: "小雨",
        WEATHER_8: "中雨",
        WEATHER_9: "大雨",
        WEATHER_10: "暴雨",
        WEATHER_11: "大暴雨",
        WEATHER_12: "特大暴雨",
        WEATHER_13: "阵雪",
        WEATHER_14: "小雪",
        WEATHER_15: "中雪",
        WEATHER_16: "大雪",
        WEATHER_17: "暴雪",
        WEATHER_18: "雾",
        WEATHER_19: "冻雨",
        WEATHER_20: "沙尘暴",
        WEATHER_21: "小到中雨",
        WEATHER_22: "中到大雨",
        WEATHER_23: "大到暴雨",
        WEATHER_24: "暴雨到大暴雨",
        WEATHER_25: "大暴雨到特大暴雨",
        WEATHER_26: "小到中雪",
        WEATHER_27: "中到大雪",
        WEATHER_28: "大到暴雪",
        WEATHER_29: "浮尘",
        WEATHER_30: "扬沙",
        WEATHER_31: "沙尘暴",
        WEATHER_32: "强沙尘暴",
        WEATHER_33: "特强沙尘暴",
        WEATHER_34: "轻雾",
        WEATHER_35: "浓雾",
        WEATHER_36: "强浓雾",
        WEATHER_37: "轻微霾",
        WEATHER_38: "轻度霾",
        WEATHER_39: "中度霾",
        WEATHER_40: "重度霾",
        WEATHER_41: "特强霾",
        WEATHER_42: "霰",
        WEATHER_43: "飑线"
    },
    // language - english
    en_US: {
        /*--------*/
        /* footer */
        /*--------*/
        FOOTER_INFO_CHOICE: "to select",
        FOOTER_INFO_DOT: "，",
        FOOTER_INFO_PRESS: "press",
        FOOTER_INFO_PAGE: "to flip",
        FOOTER_INFO_OK: "to confirm",
        FOOTER_INFO_RETURN_LEVEL: "return last level",
        FOOTER_INFO_RETURN_HOME: "to return home",
        /*--------------*/
        /* welcome.html */
        /*--------------*/
        WELCOME_H1: "Welcome Mr.Zhang",
        WELCOME_HYC: "Welcome to the hotel.I sincerely hope that you can have a good time.We will provide you with quality service and make you comfortable .It's my greatest pleasure to bring you happiness",
        /*------------*/
        /* index.html */
        /*------------*/
        INDEX_MY_HOTEL: "MyHotel",
        INDEX_KEFANG_YULE: "Entertainment",
        INDEX_HETEL_SERVICE: "Service",
        INDEX_TRL_HELP: "Assistant",
        INDEX_MORE_SET: "Setting",
        /*---------------*/
        /* language.html */
        /*---------------*/
        LANGUAGE: "Language",
        LANGUAGE_WARN: "Note:press the OK to confirm.",

        /*--------------*/
        /* setting.html */
        /*--------------*/
        SETTING: "Setting",
        SETTING_PIN: "Change PIN",
        SETTING_LANGUAGE: "Language",
        /*----------*/
        /* pin.html */
        /*----------*/
        PIN: "PIN",
        PIN_OLD: "old pin :",
        PIN_NEW: "new pin :",
        PIN_INFO: "Please press the OK to confirm.",
        PIN_WARN: "Note: Initial PIN is your room number. Please enter by digital key.",
        PIN_SUCCESS: "PIN set success",
        PIN_FAIL_OLD: "The old PIN is faild ,pelease input repeat.",
        PIN_EMPTY_NEW: "The new PIN not allow empty",
        /*-------------*/
        /* helper.html */
        /*-------------*/
        HELPER: "Assistant",
        HELPER_WEATHER: "Weather",
        HELPER_TIME: "World Times",
        HELPER_TRAIN: "Train Schedule",
        HELPER_PLANE: "Air Ticket Reserve",
        HELPER_MONEY: "Exchange Rate",
        HELPER_HOURSER: "Room Message",
        HELPER_GROUPER: "My Group",
        HELPER_SCENERY: "Scenic Spot",
        /*---------------*/
        /* my-hotel.html */
        /*---------------*/
        MY_HOTEL: "My Hotel",
        MH_INFORMATION: "Group Intr.",
        MH_HOTEL: "Hotel Intr.",
        MH_TV: "Live TV",
        MH_BILL: "My Bill",
        /*-------------------*/
        /* entertaiment.html */
        /*-------------------*/
        ENTERTAIMENT: "Entertaiment",
        ETM_MUSIC: "MUSIC",
        ETM_MOVIE: "MOVIE",
        ETM_ONLINE: "ONLINE",
        ETM_APP: "APP",
        /*--------------*/
        /* service.html */
        /*--------------*/
        SERVICE: "Service",
        SVC_SERVICE: "Room Service",
        SVC_RENTCAR: "Rent Car",
        SVC_DINNER: "Order Meal",
        SVC_SHOPPING: "Shopping",
        /*------------*/
        /* money.html */
        /*------------*/
        MONEY: "Exchange Rate",
        MONEY_ZHZSJ: "Middle rate of BOC",
        MONEY_WARN: "Currency exchange rate is for your reference only, please confirm the real-time exchange rate.",
        MNY_TEXT_2: "foreign currency exchange：",
        /*-----------*/
        /* time.html */
        /*-----------*/
        TIME: "World Times",
        /*-------------------*/
        /* room-service.html */
        /*-------------------*/
        ROOM_SERVICE: "Room service",
        RM_MJ: "Towel",
        RM_ZT: "Pillow",
        RM_YJ: "Hanger",
        RM_YZ: "Ashtray",
        RM_ZJ: "Tissue",
        RM_YS: "Toothbrush",
        RM_MY: "Bath",
        /*-------*/
        /* hotel */
        /*-------*/
        HOTEL: "Hotel",
        HOTEL_JDJS: "Hotel Intr.",
        HOTEL_KFJS: "GuestRoom",
        HOTEL_HYSS: "Meeting Room Intro.",
        HOTEL_CTJS: "Dining Room Intro.",
        HOTEL_WDZD: "My Bill",
        HOTEL_AQXZ: "Safety Precautions",
        HOTEL_FWML: "Services List",
        /*------------*/
        /* plane.html */
        /*------------*/
        PLANE: "Plane",
        PLANE_LEAVE: "Leave",
        PLANE_PORT: "Port",
        PLANE_NUMBER: "Number",
        PLANE_MODEL: "Model",
        PLANE_DESTINATION: "Destination",
        PLANE_WAIT: "Wait place",
        PLANE_START: "Start time",
        PLANE_END: "End time",
        /*------------*/
        /* train.html */
        /*------------*/
        TRAIN: "Train",
        TRAIN_NUM: "Model",
        TRAIN_LEAVE: "Location",
        TRAIN_PORT: "Destination",
        TRAIN_START: "Start time",
        TRAIN_END: "End time",
        TRAIN_TOTAL: "Run time",
        /*--------------*/
        /* grouper.hmtl */
        /*--------------*/
        GROUPER: "Group Intr.",
        GROUPER_ROUTES: "Group Routes",
        GROUPER_LIST: "Group NameList",
        GROUPER_TKXM: "Name",
        GROUPER_FH: "Room number",
        GROUPER_TEL: "Tel",
        /*------------*/
        /* rentcar.html */
        /*------------*/
        RENTCAR:'Car Rental',
        CAR_CHOSE:'Vehicle Type Selection',
        CAR_RULES:'Valuation Rules',
        CAR_BRAND:'Brand',
        CAR_MODELS:'Motorcycle Type',
        CAR_TYPE:'Type',
        CAR_PRICE:'Daily Price',
        /*------------*/
        /* bill.html */
        /*------------*/
        MY_BILL:"My Bill",
        CONSUME_DATE:"Consumption Time",
        CONSUME_DETAILS:"Detailed",
        CONSUME_MONEY:"Amounts", 
        /*-------------*/
        /* houser.html */
        /*-------------*/
        HOUSER: "Room Message",
        HOUSER_STATE: "State",
        HOUSER_DATE: "Date",
        HOUSER_H: "Title",
        HOUSER_SOURCE: "Source",

        WEATHER_0: "Sunny",
        WEATHER_1: "Cloudy",
        WEATHER_2: "Cloudy",
        WEATHER_3: "Shower ",
        WEATHER_4: "Thunder shower",
        WEATHER_5: "Thunderstorms with hail",
        WEATHER_6: "Rain and snow",
        WEATHER_7: "Light rain",
        WEATHER_8: "Rain",
        WEATHER_9: "Heavy rain",
        WEATHER_10: "Heavy rain",
        WEATHER_11: "Heavy rain",
        WEATHER_12: "Heavy rain",
        WEATHER_13: "Snow shower",
        WEATHER_14: "Slight snow",
        WEATHER_15: "Snow",
        WEATHER_16: "Heavy snow",
        WEATHER_17: "Heavy snow",
        WEATHER_18: "Fog",
        WEATHER_19: "Ice rain",
        WEATHER_20: "Sandstorm",
        WEATHER_21: "Light rain",
        WEATHER_22: "Rain",
        WEATHER_23: "Heavy rain",
        WEATHER_24: "Heavy rain",
        WEATHER_25: "Heavy rain",
        WEATHER_26: "Slight snow",
        WEATHER_27: "Snow",
        WEATHER_28: "Heavy snow",
        WEATHER_29: "Dust",
        WEATHER_30: "Blowing sand",
        WEATHER_31: "Sandstorm",
        WEATHER_32: "Strong sandstorm",
        WEATHER_33: "Strong sandstorm",
        WEATHER_34: "Light fog",
        WEATHER_35: "Fog",
        WEATHER_36: "Heavy fog",
        WEATHER_37: "Slight haze",
        WEATHER_38: "Light haze",
        WEATHER_39: "Haze",
        WEATHER_40: "Heavy haze",
        WEATHER_41: "Heavy haze",
        WEATHER_42: "Graupel",
        WEATHER_43: "Squall"
    }
}
