var name = "#footer";
var menuYloc = null;
var $ = 
 
$(document).ready(function(){
  menuYloc = parseInt($(name).css("top").substring(0,$(name).css("top").indexOf("px")))
    $(window).scroll(function () { 
        var offset = menuYloc+$(document).scrollTop()+"px";
        $(name).animate({top:offset},{duration:500,queue:false});
  });
	var d = new Date();
	var paragraph = document.createElement('p');
	document.getElementById('date').appendChild('Posted on :' + d.getDate() + ' ' + (d.getMonth() + 1) + ' ' + d.getFullYear() + 'at ' + d.getHours() + ':' + d.getMinutes()');


});
