var year,
    month,
    day,
    hour,
    minutes,
    seconds,
    week,
    formateDate;

var headerHtml = "" 
+ "<header>" 
+ "<nav class='title'>"
+ "<span class = 'hotel-img'></span>"
+ "<span class = 'cut-line'></span>"
+ "<span class = 'title-name'></span>"
+ "</nav>" 
+ "<section class='information'>" 
+ "<div class='weather_img'></div>" 
+ "<div class='cut-line'></div>" 
+ "<div class='flex-column flex-first'>" 
+ "<div class='weather_font'></div>" 
+ "<div class='week'></div>" 
+ "</div>" 
+ "<div class='flex-column flex-second'>" 
+ "<div class='temper'><span id='temper_num'></span><span>℃</span></div>" 
+ "<div class='date'></div>" 
+ "</div>" 
+ "<div class='cut-line'></div>" 
    + "<div class='time'><span class='hour'></span><span class='dot'>:</span><span class='minutes'></span></div>" 
+ "</section>" 
+ "</header>";
$(headerHtml).prependTo('body');

function getTimer(language) {
    var date = new Date();
    var utc_date = date.toDateString();
    // utc_date = Tue Nov 03 2015 ;
    utc_date = utc_date.split(" ");
    if (language == "zh_CN" || language == "" || !language) {
        year = date.getFullYear();
        month = date.getMonth() > 9 ? (date.getMonth() + 1).toString() : '0' + (date.getMonth() + 1).toString();
        day = date.getDate() > 9 ? date.getDate().toString() : '0' + date.getDate().toString();
        week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        week = week[date.getDay()];
        formateDate = year + '.' + month + '.' + day;
    } else if(language == "en_US"){
        year = date.getFullYear();
        month = utc_date[1];
        day = date.getDate() > 9 ? date.getDate().toString() : '0' + date.getDate().toString();
        week = utc_date[0];
        formateDate = month + '.' + day + '.' + year;
    }
}

function setTimer(language) {
    // var language = apk.getUtility('LangCode');
    // var language = "zh_CN";
    getTimer(language);
    $('header .date').text(formateDate);
    $('header .week').text(week);
    $('header section.information').css('display', 'flex');
}


function Timer(){
    var date = new Date();
    var utc_date = date.toDateString();

    hour = date.getHours() > 9 ? date.getHours().toString() : '0' + date.getHours().toString();
    minutes = date.getMinutes() > 9 ? date.getMinutes().toString() : '0' + date.getMinutes().toString();
    seconds = date.getSeconds() > 9 ? date.getSeconds().toString() : '0' + date.getSeconds().toString();

    $('header .time .hour').text(hour);
    $('header .time .minutes').text(minutes);

    function dot() {
        $('header .dot').toggleClass('hidden');
    }
    dot();
    
    if(minutes == '00'){
        setTimer();
        getWeather();
    }
        
}

function getWeather(language) {
    if (language == "zh_CN" || language == "" || !language) {
       $("#temper_num").text('27'); 
       $('.weather_font').text("晴");
    }
    else {
       $("#temper_num").text('27'); 
       $('.weather_font').text("Sun"); 
    }
    
    
}

function getWeather_old() {
    var location_port = apk.getUrlPrefix(); // 192.168.1.164
    var termId = apk.getTermId(); // 6
    var url = location_port + '/LocalServer/TVBozone/API/V001R001/Portal/getWeather?TermId=' + termId;
    var debug = apk.logDebug(url); //undefine
    var location_media_port = apk.getFileUrlPrefix(); // 192.168.1.164:8181
    var weather = apk.getJson("" + "weather");
    var cityname = apk.getCityName(); // Beijing 默认城市
    function getDataFromTime(mjd) {
        var a = apk.getYmdFromMjd(parseInt(mjd));
        return a.split("-");
    }
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'jsonp',
        jsonp: 'Callback',
        success: function(data_ajax) {
            if (weather != "" && apk.getCityName() != "") {
                var obj = jQuery.parseJSON(weather); // 获取json 数据
                $.each(obj, function(index, data) {
                    if (data.city == cityname) {
                        $.each(data.weaList, function(index, value) {
                            var current_date = new Date().getDate(); //今日日期
                            if (getDataFromTime(parseInt(value.mjd))[2] == current_date) {
                                // alert("今日日期："+ current_date);
                                var w_weather = parseInt(value.weaD); //白天天气
                                // alert(w_weather);
                                var d_weather = parseInt(value.weaL); //夜晚天气
                                // alert(d_weather);
                                var w_temper = parseInt(value.ht); //最高温度
                                var d_temper = parseInt(value.lt); //最低温度

                                var current_hour = new Date().getHours(); //当前时间
                                var current_minutes = new Date().getMinutes(); //当前分钟

                                if ((current_hour * 60 + current_minutes) > (6 * 60) && (current_hour * 60 + current_minutes) < (18 * 60)) {
                                    // alert("最高温 ：" + w_temper);
                                    $('#temper_num').text(w_temper);
                                } else {
                                    // alert("最低温: "+ d_temper);
                                    $('#temper_num').text(d_temper);
                                }
                                var language = apk.getUtility('LangCode');
                                var obj_language= new Language();

                                var WeatherData = function() {};
                                WeatherData.prototype = {
                                    "weatherInfor": [{
                                        'id': '0',
                                        'name': obj_language[language].WEATHER_0,
                                        'image': 'weather-0'
                                    }, {
                                        'id': '1',
                                        'name': obj_language[language].WEATHER_1,
                                        'image': 'weather-1'
                                    }, {
                                        'id': '2',
                                        'name': obj_language[language].WEATHER_2,
                                        'image': 'weather-2'
                                    }, {
                                        'id': '3',
                                        'name': obj_language[language].WEATHER_3,
                                        'image': 'weather-3'
                                    }, {
                                        'id': '4',
                                        'name': obj_language[language].WEATHER_4,
                                        'image': 'weather-4'
                                    }, {
                                        'id': '5',
                                        'name': obj_language[language].WEATHER_5,
                                        'image': 'weather-5'
                                    }, {
                                        'id': '6',
                                        'name': obj_language[language].WEATHER_6,
                                        'image': 'weather-6'
                                    }, {
                                        'id': '7',
                                        'name': obj_language[language].WEATHER_7,
                                        'image': 'weather-7'
                                    }, {
                                        'id': '8',
                                        'name': obj_language[language].WEATHER_8,
                                        'image': 'weather-8'
                                    }, {
                                        'id': '9',
                                        'name': obj_language[language].WEATHER_9,
                                        'image': 'weather-9'
                                    }, {
                                        'id': '10',
                                        'name': obj_language[language].WEATHER_10,
                                        'image': 'weather-10'
                                    }, {
                                        'id': '11',
                                        'name': obj_language[language].WEATHER_11,
                                        'image': 'weather-11'
                                    }, {
                                        'id': '12',
                                        'name': obj_language[language].WEATHER_12,
                                        'image': 'weather-12'
                                    }, {
                                        'id': '13',
                                        'name': obj_language[language].WEATHER_13,
                                        'image': 'weather-13'
                                    }, {
                                        'id': '14',
                                        'name': obj_language[language].WEATHER_14,
                                        'image': 'weather-14'
                                    }, {
                                        'id': '15',
                                        'name': obj_language[language].WEATHER_15,
                                        'image': 'weather-15'
                                    }, {
                                        'id': '16',
                                        'name': obj_language[language].WEATHER_16,
                                        'image': 'weather-16'
                                    }, {
                                        'id': '17',
                                        'name': obj_language[language].WEATHER_17,
                                        'image': 'weather-17'
                                    }, {
                                        'id': '18',
                                        'name': obj_language[language].WEATHER_18,
                                        'image': 'weather-18'
                                    }, {
                                        'id': '19',
                                        'name': obj_language[language].WEATHER_19,
                                        'image': 'weather-19'
                                    }, {
                                        'id': '20',
                                        'name': obj_language[language].WEATHER_20,
                                        'image': 'weather-20'
                                    }, {
                                        'id': '21',
                                        'name': obj_language[language].WEATHER_21,
                                        'image': 'weather-21'
                                    }, {
                                        'id': '22',
                                        'name': obj_language[language].WEATHER_22,
                                        'image': 'weather-22'
                                    }, {
                                        'id': '23',
                                        'name': obj_language[language].WEATHER_23,
                                        'image': 'weather-23'
                                    }, {
                                        'id': '24',
                                        'name': obj_language[language].WEATHER_24,
                                        'image': 'weather-24'
                                    }, {
                                        'id': '25',
                                        'name': obj_language[language].WEATHER_25,
                                        'image': 'weather-25'
                                    }, {
                                        'id': '26',
                                        'name': obj_language[language].WEATHER_26,
                                        'image': 'weather-26'
                                    }, {
                                        'id': '27',
                                        'name': obj_language[language].WEATHER_27,
                                        'image': 'weather-27'
                                    }, {
                                        'id': '28',
                                        'name': obj_language[language].WEATHER_28,
                                        'image': 'weather-28'
                                    }, {
                                        'id': '29',
                                        'name': obj_language[language].WEATHER_29,
                                        'image': 'weather-29'
                                    }, {
                                        'id': '30',
                                        'name': obj_language[language].WEATHER_30,
                                        'image': 'weather-30'
                                    }, {
                                        'id': '31',
                                        'name': obj_language[language].WEATHER_31,
                                        'image': 'weather-31'
                                    }, {
                                        'id': '32',
                                        'name': obj_language[language].WEATHER_32,
                                        'image': 'weather-32'
                                    }, {
                                        'id': '33',
                                        'name': obj_language[language].WEATHER_33,
                                        'image': 'weather-33'
                                    }, {
                                        'id': '34',
                                        'name': obj_language[language].WEATHER_34,
                                        'image': 'weather-34'
                                    }, {
                                        'id': '35',
                                        'name': obj_language[language].WEATHER_35,
                                        'image': 'weather-35'
                                    }, {
                                        'id': '36',
                                        'name': obj_language[language].WEATHER_36,
                                        'image': 'weather-36'
                                    }, {
                                        'id': '37',
                                        'name': obj_language[language].WEATHER_37,
                                        'image': 'weather-37'
                                    }, {
                                        'id': '38',
                                        'name': obj_language[language].WEATHER_38,
                                        'image': 'weather-38'
                                    }, {
                                        'id': '39',
                                        'name': obj_language[language].WEATHER_39,
                                        'image': 'weather-39'
                                    }, {
                                        'id': '40',
                                        'name': obj_language[language].WEATHER_40,
                                        'image': 'weather-40'
                                    }, {
                                        'id': '41',
                                        'name': obj_language[language].WEATHER_41,
                                        'image': 'weather-41'
                                    }, {
                                        'id': '42',
                                        'name': obj_language[language].WEATHER_42,
                                        'image': 'weather-42'
                                    }]
                                }
                                var weather_data = new WeatherData();

                                for (var index = 0 in weather_data.weatherInfor) {
                                    if (weather_data.weatherInfor[index].id == w_weather) {
                                        $('.weather_font').text(weather_data.weatherInfor[index].name);
                                        $('.weather_img').addClass(weather_data.weatherInfor[index].image);
                                        return;
                                    }
                                }
                            }
                        })
                    }
                });
            };
        }
    });
}

/*setInterval(setTimer, 1000);*/
Timer()
setInterval(Timer, 1000);
setTimer();
getWeather();
