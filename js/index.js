$(function(){
    var length,currentIndex= 0,interval,hasStarted=false,t=3000;
    var length=$("#slider_main").children().length;
    //按钮隐藏显示
$("#lunbo").mouseover(function(){$(".btn").css("display","block");stop()})
    .mouseout(function(){$(".btn").css("display","none");start()});
//绑定按键
    $(".sliders_left").unbind("click");
    $(".sliders_left").bind("click",function(){pre()});
    $(".sliders_right").unbind("click");
    $(".sliders_right").bind("click",function(){next()});

//绑定导航按钮
    $(".sliders_down").children().hover(
        function() {
            var preIndex= $(".sliders_down").children().filter(".sliders_selt").index();
            var  currentIndex=$(this).index();
            $(this).addClass("sliders_selt").siblings().removeClass();
            play(preIndex,currentIndex);
        },
        function(){start();}
            )


//向前翻页
function pre(){
      var preIndex=currentIndex;
    currentIndex=(--currentIndex+length)%length;
    play(preIndex,currentIndex)
    }
//向后翻页
    function next(){
        var preIndex=currentIndex;
        currentIndex=(++currentIndex)%length;
        play(preIndex,currentIndex)
    }
 //从preIndex翻到currentIdex页
    function play(preIndex,currentIndex){
      $("#slider_main").children().eq(preIndex).fadeOut(500).parent().children().
      eq(currentIndex).fadeIn(1000);
        $(".sliders_down").children().removeClass("sliders_selt");
        $(".sliders_down").children().eq(currentIndex).addClass("sliders_selt");
    }
    //开始轮播
    function start(){
        if(!hasStarted){
            hasStarted=true;
            interval=setInterval(next ,t);
        }
    }
    function stop(){
        clearInterval(interval);
        hasStarted=false;
    }
    start();
});

//小图标动画显隐效果
$(function(){

    $(".LianXi_itmes>img").hover(
        function(){
            $(this).parent().children("div").show();
        }, function(){
            $(this).parent().children("div").hide();}
    )
});

//ourServices左移动；
$(function(){
    var speed=10,sLeft=0;
    var tab=$(".ourServices-list-box>ul");

function move(){
    if(sLeft>=tab.width()*4/12){
        sLeft=0;
    }else{sLeft++}
    $(".ourServices-list-box>ul>li").css("left",-sLeft);
}
    var MyMar=setInterval(move,speed);
    tab.mouseover(function() {clearInterval(MyMar)});
    tab.mouseout(function() {MyMar=setInterval(move,speed)});

});
//ourTeam左移动；
$(function(){
    var speed=10,sLeft=0;
    var tab=$(".ourTeam-box>ul");
    $(".list-2").html($(".list-1").html());
    function move(){
        if(sLeft>=tab.width()/2){
            sLeft=0;
        }else{sLeft++}
        $(".ourTeam-box>ul").css("left",-sLeft);
    }
    var MyMar=setInterval(move,speed);
    tab.mouseover(function() {clearInterval(MyMar)});
    tab.mouseout(function() {MyMar=setInterval(move,speed)});

});

//左侧点击事件
$(function(){
    $(".left-list>li").click(function(){
          $(this).children("a").css("color","#4EB4EF")
              .children("span").css("background-color","#4EB4EF");
        $(this).siblings().children("a").css("color","#7B7B7B")
            .children("span").css("background-color","#f0f0f0")

    });
    $(".left-list>li:nth-child(1)").click(function(){
        $(this).next().children("a").css("color","#4EB4EF")
            .children("span").css("background-color","#4EB4EF");
        $(this).children("a").css("color","#7B7B7B")
            .children("span").css("background-color","#f0f0f0")
           });

    $(".left-list>li:nth-child(9)").click(function(){

        $(this).parent().children().children("a").css("color","#7B7B7B")
            .children("span").css("background-color","#f0f0f0")
    });

});
//滚轮事件
$(function(){
    $(window).scroll(function(){
        var $a=$(window).scrollTop();
        console.log($a);
      if($a<=489&$a>=375){
          $(".left-list>li:nth-child(1)").children("a").css("color","#4EB4EF")
              .children("span").css("background-color","#4EB4EF").parent("a").parent("li")
           .siblings().children("a").css("color","#7B7B7B")
              .children("span").css("background-color","#f0f0f0");
      }else if($a<=937&$a>=490){
          $(".left-list>li:nth-child(2)").children("a").css("color","#4EB4EF")
              .children("span").css("background-color","#4EB4EF")
              .parent("a").parent("li").siblings().children("a").css("color","#7B7B7B")
              .children("span").css("background-color","#f0f0f0");
      }else if($a<=1332&$a>=938){
          $(".left-list>li:nth-child(3)").children("a").css("color","#4EB4EF")
              .children("span").css("background-color","#4EB4EF")
              .parent("a").parent("li") .siblings().children("a").css("color","#7B7B7B")
              .children("span").css("background-color","#f0f0f0");
      }else if($a<=1843&$a>=1332) {
          $(".left-list>li:nth-child(4)").children("a").css("color","#4EB4EF")
              .children("span").css("background-color","#4EB4EF")
              .parent("a").parent("li") .siblings().children("a").css("color","#7B7B7B")
              .children("span").css("background-color","#f0f0f0");
      }else if($a<=2030&$a>=1333){
          $(".left-list>li:nth-child(5)").children("a").css("color","#4EB4EF")
              .children("span").css("background-color","#4EB4EF")
              .parent("a").parent("li") .siblings().children("a").css("color","#7B7B7B")
              .children("span").css("background-color","#f0f0f0");
      }else if($a<=2354&$a>2031){
          $(".left-list>li:nth-child(6)").children("a").css("color","#4EB4EF")
              .children("span").css("background-color","#4EB4EF")
              .parent("a").parent("li") .siblings().children("a").css("color","#7B7B7B")
              .children("span").css("background-color","#f0f0f0");
      }
      else if($a<=2499&$a>2354){
          $(".left-list>li:nth-child(7)").children("a").css("color","#4EB4EF")
              .children("span").css("background-color","#4EB4EF")
              .parent("a").parent("li").siblings().children("a").css("color","#7B7B7B")
              .children("span").css("background-color","#f0f0f0");
      }else{
          console.log("none");
      }


    });

})