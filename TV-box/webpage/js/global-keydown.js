
//返回键 返回上一页
var GLOBALKEY = 80700;

//tv - vod 
var TVVODKEY = 2013;

// 返回键 return 
var RETURNKEY = 4;

// 菜单键 menu
var MENUKEY = 82;


var tools = {
    "apkMessage": function(code, agr) {
    	// alert(code);
    	// alert(agr);
        switch (code) {
            case GLOBALKEY:
            	switch(agr){
            		case RETURNKEY:
            			window.history.back();
                        exitMedia(1);
            			break;
            	}
            break;

        }
    } 
}
