/**
 * Created by Max on 16/4/23.
 */
//移动端拖放
var box = document.querySelectorAll('.container')[0];
box.addEventListener('touchmove', function(e) {
    var touch = e.targetTouches[0];
    box.style.left = touch.pageX - 100 + 'px';
    box.style.top = touch.pageY - 100 + 'px';
});

//PC端拖放
var param = {
    left: 0,
    top: 0,
    currentX: 0,
    currentY: 0,
    flag: false
};
var getCss = function(elem, key) {
    return elem.currentStyle? elem.currentStyle[key] : document.defaultView.getComputedStyle(elem, null)[key];
};
var startDrag = function(target){  //bar触发拖动的元素   target被拖动的元素
    if(getCss(target, 'left') !== 'auto') {
        param.left = getCss(target, 'left');
    }
    if(getCss(target, 'top') !== 'auto') {
        param.top = getCss(target, 'top');
    }
    target.onmousedown = function(event) {
        var e = event || window.event;
        param.flag = true;
        param.currentX = e.clientX;
        param.currentY = e.clientY;


    };
    document.onmouseup = function() {
        param.flag = false;
        if(getCss(target, 'left') !== 'auto') {
            param.left = getCss(target, 'left');
        }
        if(getCss(target, 'top') !== 'auto') {
            param.top = getCss(target, 'top');
        }

    };
    document.onmousemove = function(event) {
        var e = event || window.event;
        if(param.flag) {
            var nowX = e.clientX - param.currentX;
            var nowY = e.clientY - param.currentY;
            target.style.left = nowX + parseInt(param.left) +'px';
            target.style.top = nowY + parseInt(param.top) +'px';
        }
    }

};
var drag = document.querySelector('#drag');
startDrag(drag);