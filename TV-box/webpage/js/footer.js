
/*
var footerHtml = ""
+"<footer>"
        +"<div class='center_box'>"
            +"<span class='footer_press'>按</span>"
            +"<div class='footer_top'></div>"
            +"<div class='footer_bottom'></div>"
            +"<div class='footer_left'></div>"
            +"<div class='footer_right'></div>"
            +"<span class='footer_choice'>选择</span>"
            +"<span class='footer_dot'>，</span>"
            +"<span class='footer_press'>按</span>"
            +"<div class='footer_back'></div>"
            +"<span class='footer_return'>返回</span>"
            +"<span class='footer_dot'>，</span>"
            +"<span class='footer_press'>按</span>"
            +"<div class='footer_ok'></div>"
            +"<span class='footer_confirm'>确认</span>"
            +"<span class='footer_dot'>，</span>"
            +"<span class='footer_press'>按</span>"
            +"<div class='footer_home'></div>"
            +"<span class='footer_return_home'>返回主页</span>"
        +"</div>"
    +"</footer>"
;

$(footerHtml).appendTo($('body'));
*/

function setFooter(){
    $('footer').remove();
    var url = window.location.href;

    var footerHtml = "";
    var obj_language = new Language();
    // var language = apk.getUtility('LangCode');

    //获取路径中包含的语言信息
    var href = window.location.href;
    href = href.substr(href.indexOf('language'));
    href = href.replace('language=', '');

    var language = href;

    if ( language != "en_US" ) {
        language = "zh_CN";
    }

    var press = obj_language[language].FOOTER_INFO_PRESS;
    // alert(press);
    var choice = obj_language[language].FOOTER_INFO_CHOICE;
    // alert(choice);
    var dot = obj_language[language].FOOTER_INFO_DOT;
    // alert(dot);
    var page = obj_language[language].FOOTER_INFO_PAGE;
    // alert(page);
    var ok = obj_language[language].FOOTER_INFO_OK;
    // alert(ok);
    var return_level = obj_language[language].FOOTER_INFO_RETURN_LEVEL;
    // alert(return_level);
    var return_home = obj_language[language].FOOTER_INFO_RETURN_HOME;
    // alert(return_home);

    if(url.indexOf('index.html') > 0){
        footerHtml = ""
        +"<footer>"
            +"<div class='center_box'>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_left'></div>"
                +"<div class='footer_right'></div>"
                +"<span class='footer_choice'>" + choice + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_ok'></div>"
                +"<span class='footer_confirm'>" + ok + "</span>"
            +"</div>"
        +"</footer>";

        $(footerHtml).appendTo($('body'));
    }
    else if(url.indexOf('setting.html') > 0){
        footerHtml = ""
        +"<footer>"
            +"<div class='center_box'>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_left'></div>"
                +"<div class='footer_right'></div>"
                +"<span class='footer_choice'>" + choice + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_ok'></div>"
                +"<span class='footer_confirm'>" + ok + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_back'></div>"
                +"<span class='footer_return'>" + return_level + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_home'></div>"
                +"<span class='footer_return_home'>" + return_home + "</span>"
            +"</div>"
        +"</footer>";

        $(footerHtml).appendTo($('body'));    
    }
    else if(url.indexOf('helper.html') > 0){
        footerHtml = ""
        +"<footer>"
            +"<div class='center_box'>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_left'></div>"
                +"<div class='footer_right'></div>"
                +"<span class='footer_choice'>" + choice + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_ok'></div>"
                +"<span class='footer_confirm'>" + ok + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_back'></div>"
                +"<span class='footer_return'>" + return_level + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_home'></div>"
                +"<span class='footer_return_home'>" + return_home + "</span>"
            +"</div>"
        +"</footer>";

        $(footerHtml).appendTo($('body'));    
    }
    else if(url.indexOf('my-hotel.html') > 0){
        footerHtml = ""
        +"<footer>"
            +"<div class='center_box'>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_left'></div>"
                +"<div class='footer_right'></div>"
                +"<span class='footer_choice'>" + choice + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_ok'></div>"
                +"<span class='footer_confirm'>" + ok + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_back'></div>"
                +"<span class='footer_return'>" + return_level + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_home'></div>"
                +"<span class='footer_return_home'>" + return_home + "</span>"
            +"</div>"
        +"</footer>";

        $(footerHtml).appendTo($('body'));    
    }
    else if(url.indexOf('entertaiment.html') > 0){
        footerHtml = ""
        +"<footer>"
            +"<div class='center_box'>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_left'></div>"
                +"<div class='footer_right'></div>"
                +"<span class='footer_choice'>" + choice + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_ok'></div>"
                +"<span class='footer_confirm'>" + ok + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_back'></div>"
                +"<span class='footer_return'>" + return_level + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_home'></div>"
                +"<span class='footer_return_home'>" + return_home + "</span>"
            +"</div>"
        +"</footer>";

        $(footerHtml).appendTo($('body'));    
    }
    else if(url.indexOf('room-service.html') > 0){
        footerHtml = ""
        +"<footer>"
            +"<div class='center_box'>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_top'></div>"
                +"<div class='footer_bottom'></div>"
                +"<span class='footer_choice'>" + choice + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_back'></div>"
                +"<span class='footer_return'>" + return_level + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_home'></div>"
                +"<span class='footer_return_home'>" + return_home + "</span>"
            +"</div>"
        +"</footer>";

        $(footerHtml).appendTo($('body'));    
    }
    else if(url.indexOf('service.html') > 0){
        footerHtml = ""
        +"<footer>"
            +"<div class='center_box'>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_left'></div>"
                +"<div class='footer_right'></div>"
                +"<span class='footer_choice'>" + choice + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_ok'></div>"
                +"<span class='footer_confirm'>" + ok + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_back'></div>"
                +"<span class='footer_return'>" + return_level + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_home'></div>"
                +"<span class='footer_return_home'>" + return_home + "</span>"
            +"</div>"
        +"</footer>";

        $(footerHtml).appendTo($('body'));    
    }
    else if(url.indexOf('language.html') > 0){
        footerHtml = ""
        +"<footer>"
            +"<div class='center_box'>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_left'></div>"
                +"<div class='footer_right'></div>"
                +"<span class='footer_choice'>" + choice + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_ok'></div>"
                +"<span class='footer_confirm'>" + ok + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_back'></div>"
                +"<span class='footer_return'>" + return_level + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_home'></div>"
                +"<span class='footer_return_home'>" + return_home + "</span>"
            +"</div>"
        +"</footer>";

        $(footerHtml).appendTo($('body'));    
    }
    else if(url.indexOf('pin.html') > 0){
        footerHtml = ""
        +"<footer>"
            +"<div class='center_box'>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_top'></div>"
                +"<div class='footer_bottom'></div>"
                +"<span class='footer_choice'>" + choice + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_ok'></div>"
                +"<span class='footer_confirm'>" + ok + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_back'></div>"
                +"<span class='footer_return'>" + return_level + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_home'></div>"
                +"<span class='footer_return_home'>" + return_home + "</span>"
            +"</div>"
        +"</footer>";

        $(footerHtml).appendTo($('body'));    
    }
    else if(url.indexOf('hotel.html') > 0){
        footerHtml = ""
        +"<footer>"
            +"<div class='center_box'>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_top'></div>"
                +"<div class='footer_bottom'></div>"
                +"<span class='footer_choice'>" + choice + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_back'></div>"
                +"<span class='footer_return'>" + return_level + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_home'></div>"
                +"<span class='footer_return_home'>" + return_home + "</span>"
            +"</div>"
        +"</footer>";
        $(footerHtml).appendTo($('body'));    
    }
    else if(url.indexOf('money.html') > 0){
        footerHtml = ""
        +"<footer>"
            +"<div class='center_box'>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_back'></div>"
                +"<span class='footer_return'>" + return_level + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_home'></div>"
                +"<span class='footer_return_home'>" + return_home + "</span>"
            +"</div>"
        +"</footer>";

        $(footerHtml).appendTo($('body'));    
    }
    else if(url.indexOf('time.html') > 0){
        footerHtml = ""
        +"<footer>"
            +"<div class='center_box'>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_left'></div>"
                +"<div class='footer_right'></div>"
                +"<span class='footer_choice'>" + choice + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_back'></div>"
                +"<span class='footer_return'>" + return_level + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_home'></div>"
                +"<span class='footer_return_home'>" + return_home + "</span>"
            +"</div>"
        +"</footer>";

        $(footerHtml).appendTo($('body'));    
    }
    else if(url.indexOf('plane.html') > 0){
        footerHtml = ""
        +"<footer>"
            +"<div class='center_box'>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_top'></div>"
                +"<div class='footer_bottom'></div>"
                +"<span class='footer_choice'>" + choice + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_back'></div>"
                +"<span class='footer_return'>" + return_level + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_home'></div>"
                +"<span class='footer_return_home'>" + return_home + "</span>"
            +"</div>"
        +"</footer>";
        $(footerHtml).appendTo($('body'));    
    }
    else if(url.indexOf('train.html') > 0){
        footerHtml = ""
        +"<footer>"
            +"<div class='center_box'>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_top'></div>"
                +"<div class='footer_bottom'></div>"
                +"<span class='footer_choice'>" + choice + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_back'></div>"
                +"<span class='footer_return'>" + return_level + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_home'></div>"
                +"<span class='footer_return_home'>" + return_home + "</span>"
            +"</div>"
        +"</footer>";
        $(footerHtml).appendTo($('body'));    
    }
    else if(url.indexOf('grouper.html') > 0){
        footerHtml = ""
        +"<footer>"
            +"<div class='center_box'>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_top'></div>"
                +"<div class='footer_bottom'></div>"
                +"<span class='footer_choice'>" + choice + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_back'></div>"
                +"<span class='footer_return'>" + return_level + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_home'></div>"
                +"<span class='footer_return_home'>" + return_home + "</span>"
            +"</div>"
        +"</footer>";
        $(footerHtml).appendTo($('body'));    
    }
    else if(url.indexOf('bill.html') > 0){
        footerHtml = ""
        +"<footer>"
            +"<div class='center_box'>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_left'></div>"
                +"<div class='footer_right'></div>"
                +"<span class='footer_choice'>" + choice + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_back'></div>"
                +"<span class='footer_return'>" + return_level + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_home'></div>"
                +"<span class='footer_return_home'>" + return_home + "</span>"
            +"</div>"
        +"</footer>";
        $(footerHtml).appendTo($('body'));    
    }
    else if(url.indexOf('rentcar.html') > 0){
        footerHtml = ""
        +"<footer>"
            +"<div class='center_box'>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_left'></div>"
                +"<div class='footer_right'></div>"
                +"<span class='footer_choice'>" + choice + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_back'></div>"
                +"<span class='footer_return'>" + return_level + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_home'></div>"
                +"<span class='footer_return_home'>" + return_home + "</span>"
            +"</div>"
        +"</footer>";
        $(footerHtml).appendTo($('body'));    
    }
    else if(url.indexOf('houser.html') > 0){
        footerHtml = ""
        +"<footer>"
            +"<div class='center_box'>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_top'></div>"
                +"<div class='footer_bottom'></div>"
                +"<span class='footer_choice'>" + choice + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_back'></div>"
                +"<span class='footer_return'>" + return_level + "</span>"
                +"<span class='footer_dot'>" + dot + "</span>"
                +"<span class='footer_press'>" + press + "</span>"
                +"<div class='footer_home'></div>"
                +"<span class='footer_return_home'>" + return_home + "</span>"
            +"</div>"
        +"</footer>";
        $(footerHtml).appendTo($('body'));    
    }
    else{
        
    }
}

setFooter();