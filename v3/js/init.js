// Jeff Wolff
$(document).ready(function(){var n;$("a[href*=#]").bind("click",function(n){n.preventDefault();var e=$(this).attr("href");return $("html, body").stop().animate({scrollTop:$(e).offset().top},1250,function(){location.hash=e}),!1});var e=0,t=5,a=$("#nav").outerHeight();$(window).scroll(function(e){n=!0}),setInterval(function(){n&&(!function(){var n=$(this).scrollTop();if(Math.abs(e-n)<=t)return;n>e&&n>a?$("#nav").removeClass("nav-down").addClass("nav-up"):n+$(window).height()<$(document).height()&&$("#nav").removeClass("nav-up").addClass("nav-down");e=n}(),n=!1)},250);var o=new Date("09/13/2069"),r=new Date("08/24/1992"),i=new Date("03/03/2007");$("#days_alive").countdown({since:r,format:"d",layout:"{dn}"}),$("#death_counter").countdown({until:o,format:"YODHMS",layout:"<b>{yn} {yl}, {on} {ol}, & {dn} {dl}</b>"}),$("#website_experience").countdown({since:i,format:"Yo",layout:"<b>{yn} {yl}, {on} {ol}</b>"}),deathPercentage(o,r)});var wow=new WOW({mobile:!1});function diff_years(n,e){var t=(n.getTime()-e.getTime())/1e3;return t/=86400,t=n.getMonth()<8?Math.abs(Math.round(t/365.25))-1:Math.abs(Math.round(t/365.25))}function deathPercentage(n,e){var t=new Date;$("#percentage_lived").html((diff_years(t,e)/77*100).toFixed(2)+"%")}wow.init();
