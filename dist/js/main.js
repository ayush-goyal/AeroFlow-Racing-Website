function plusDivs(e){showDivs(slideIndex+=e)}function currentDiv(e){showDivs(slideIndex=e)}function showDivs(e){var t,i=document.getElementsByClassName("gallery-img"),s=document.getElementsByClassName("gallery-change-dots");for(e>i.length&&(slideIndex=1),e<1&&(slideIndex=i.length),t=0;t<i.length;t++)i[t].style.display="none";for(t=0;t<s.length;t++)s[t].className=s[t].className.replace(" gallery-change-dots-active","");i[slideIndex-1].style.display="block",s[slideIndex-1].className+=" gallery-change-dots-active"}$(document).ready(function(){$("#three-lines-nav-button").on("click",function(){$(this).toggleClass("open"),$("#main-nav-ul").toggleClass("openUL")})});var height=0,w=0,slideshow_height=function(){w=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height=.5625*w;var e=height/1080*128;document.getElementById("slideshow").style.height=height.toString()+"px",document.getElementById("slideshow-arrow-wrapper").style.height=height.toString()+"px",$(".arrow_img").css({height:e,width:e}),document.getElementById("slideshow").style.marginTop="70px",$(".slideshow-pic").css("top","70px")};slideshow_height(),$(window).resize(slideshow_height);var slideshow_pics=["1","2","3","4"],pic_number=0,timeout=0;$(".main-nav-li").hover(function(){void 0===$(this).attr("id")&&$(this).find("ul").css({height:"70px",opacity:"1"})},function(){void 0===$(this).attr("id")&&$(this).find("ul").css({height:"0",overflow:"hidden",opacity:"0"})});var timeout_start=function(){console.log("timeout_start"),timeout=setInterval(function(){slideshow_forward(!1)},6e3)},slideshow_forward=function(e){console.log("Hello"),document.getElementById("pic"+slideshow_pics[pic_number]).style.opacity=0,pic_number+=1,pic_number>=slideshow_pics.length&&(pic_number=0),document.getElementById("pic"+slideshow_pics[pic_number]).style.opacity=1,!0===e&&(clearTimeout(timeout),timeout_start())},slideshow_backward=function(){console.log("Hello"),document.getElementById("pic"+slideshow_pics[pic_number]).style.opacity=0,pic_number-=1,pic_number<0&&(pic_number=slideshow_pics.length-1),document.getElementById("pic"+slideshow_pics[pic_number]).style.opacity=1,clearTimeout(timeout),timeout_start()};slideshow_forward(!1),timeout_start();var slideIndex=1;showDivs(slideIndex);