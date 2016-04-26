var triggers = {
    '37': "left",
    '39': "right"
};

var current_index = 0;
$(document).keyup(function(event) {
    var key = event.which;
    var index = $('.index_nav').length;
    index = index - 1;

    if (key in triggers) {
        current_index = $('.index_nav').index($('.active').parent());
        if (key == 39) {
            if (index > current_index) {
                $('.active').parent().next().children('.index_mask').addClass('active').parent().siblings().children('.index_mask').removeClass('active');
            } else {
                $('.index_nav').children('.index_mask').eq(0).addClass('active').parent().siblings().children('.index_mask').removeClass('active');
            }
        } else if (key == 37) {
            if (current_index > 0) {
                $('.active').removeClass('active').parent().prev().children('.index_mask').addClass('active');
            } else {
                $('.index_nav').children('.index_mask').eq(index).addClass('active').parent().siblings().children('.index_mask').removeClass('active');
            }

        }
    } else {
        // alert("左右键，进行选择");
    }
});

$(document).keydown(function(event) {
    var key = event.which;

    if (key == 13) {
        var $this = $('.active').parent();

        var index = $('.index_nav').index($this);

        webpageJump(index);
    }
});


function webpageJump(index) {
    switch (index) {
        case 0:
            window.location.href = '././subordinate-page/my-hotel/my-hotel.html';
            break;
        case 1:
            window.location.href = '././subordinate-page/entertaiment/entertaiment.html';
            break;
        case 2:
            window.location.href = '././subordinate-page/service/service.html';
            break;
        case 3:
            window.location.href = '././subordinate-page/helper/helper.html';
            break;
        case 4:
            window.location.href = '././subordinate-page/setting/setting.html';
            break;
        default:
            alert("内容暂无");
            break;
    }
}


function contextInit(){
    var obj_language = new Language();

    //获取路径中包含的语言信息
    var href = window.location.href;
    href = href.substr(href.indexOf('language'));
    href = href.replace('language=', '');

    var language = href;

    if ( language != "en_US" ) {
    	language = "zh_CN";
    }

    $('#index_wdjd').html(obj_language[language].INDEX_MY_HOTEL);

    $('#index_kgyl').html(obj_language[language].INDEX_KEFANG_YULE);
    $('#index_jdfw').html(obj_language[language].INDEX_HETEL_SERVICE);
    $('#index_lxzs').html(obj_language[language].INDEX_TRL_HELP);
    $('#index_gdsz').html(obj_language[language].INDEX_MORE_SET);

    $('header nav  .title-name').text($('body').data('nav'));

    setTimer(language);
    getWeather(language);
}

contextInit();
