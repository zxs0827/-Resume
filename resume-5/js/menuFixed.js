
function menuFixed(id){
var obj = document.getElementById(id);
var _getHeight = obj.offsetTop;
window.onscroll = function(){
changePos(id,_getHeight);
}
}
function changePos(id,height){
var obj = document.getElementById(id);
var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
if(scrollTop < height){
obj.style.position = 'relative';
obj.style.marginLeft='0px';
obj.style.width = '968px';
obj.style.border = 'none';

}else{
obj.style.position = 'fixed';
obj.style.width = '970px';
obj.style.backgroundColor = '#FFF';
obj.style.marginLeft='-1px';
obj.style.top = '0';
obj.style.zIndex ='900';
obj.style.borderLeft = '1px solid #DADADA';
obj.style.borderRight = '1px solid #DADADA';
obj.style.borderRadius = '0px 0px 5px 5px';
obj.style.boxShadow = '0px 2px 6px #EEE';
/*»òÊ¹ÓÃobj.style.className = '';*/


}
} 