var triggers = {
    '37': "left",
    '39': "right",
    '38': "top",
    '40': "down"
};

var language = "zh_CN";
contextInit('zh_CN');
$(document).keyup(function(event) {
    var key = event.which;
    
    if (key in triggers) {
        $('.btn_ch').toggleClass('active');
        $('.btn_en').toggleClass('active');
        language = $('.active').data('language');
    }
    if (event.which == 13) {
        location = 'index.html?language=' + language;
    }
    // apk.setUtility('LangCode', language);
    setTimer(language);
    getWeather(language);

    contextInit(language);
});

function contextInit(language){
    var obj_language = new Language();
    $('#welcome_h1').text(obj_language[language].WELCOME_H1);
    $('#huanyingci').text(obj_language[language].WELCOME_HYC);
    
    $('header nav  .title-name').text($('body').data('nav'));
}

