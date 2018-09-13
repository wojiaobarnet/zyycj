/*"""
-------------------------------------------------
   Project Name:   zyycj
   File Name：     auth.js
   Description :
   Author :        nanly
   date：          2018-09-02 15:09
-------------------------------------------------
   Change Activity:
                   2018-09-02:
   IDE:
                   PyCharm:
-------------------------------------------------
"""
*/
//点击登陆按钮，弹出模态对话框

console.log('ssss');
//下面的代码是整个网页加载完后才执行的
$(function () {
    $("#btn").click(function () {         //登陆事件。点击登陆，显示登陆盒子S
        $(".mask-wrapper").show();       //整个大盒子是mask-wrapper。
                                         // show将display变成block
    });

    $(".close-btn").click(function () {     //点击X，关闭登陆盒子
        $(".mask-wrapper").hide();
    });
});

$(function () {
    $(".switch").click(function () {
        let scrollWrapper = $(".scroll-wrapper");
        let currentLeft = scrollWrapper.css("left");
        currentLeft = parseInt(currentLeft);
        if (currentLeft < 0) {
            scrollWrapper.animate({"left":'0'});
        }else{
            scrollWrapper.animate({"left":'-400px'});
        }

    });

});

