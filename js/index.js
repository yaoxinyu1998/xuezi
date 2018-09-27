var banner=document.getElementById("banner");
var banner_box=document.getElementsByClassName("banner_box");
var arrow_left=document.getElementsByClassName("arrow_left")[0];
var arrow_right=document.getElementsByClassName("arrow_right")[0];
var banner_list=document.getElementsByClassName("banner_list")[0];
var list=banner_list.getElementsByTagName("li");
var ul=document.getElementById("ul");
var timer;
var index=0;
function next_img(){
    index++;
    if(index>3){
        index=0;
    }
    count();
    var newLeft;
    if(ul.style.left=='-3000px'){
       newLeft=0;
    }else{
        newLeft=parseInt(ul.style.left)-1000;
    }
    ul.style.left=newLeft+"px"
}
function prive_img(){
        index--;
    if(index<0){
        index=3
    }
    count()
    if(ul.style.left=="0px"){
        ul.style.left=-3000+"px";
    }else{
        ul.style.left=parseInt(ul.style.left)+1000+"px";
    }
}

function autoPlay(){
   timer=setInterval(next_img,3000);
}
autoPlay();
function count(){
    for(var i=0;i<list.length;i++){
        list[i].className="";
    }
    list[index].className="active";
}
for(var i=0;i<list.length;i++){
    (function (i) {
        list[i].onclick=function(){
            var num=index-i;
            ul.style.left=(parseInt(ul.style.left)+num*1000) +"px";
            index=i;
            count();
        }
    })(i)
}
banner.addEventListener("mouseover",function(e){
    clearInterval(timer);
})
banner.addEventListener("mouseout",function(e){
    autoPlay();
})
arrow_left.onclick=function(){
    next_img()
}
arrow_right.onclick=function(){
    prive_img()
}
