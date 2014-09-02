$(document).ready(function (){
	var test = 17;
	var d = new Date();
	var newText = "Posted on:" d.getDate() + " " + (d.getMonth + 1) + " " + d.getFullYear() + "at " + d.getHours() ":" + d.getMinutes() ";
	document.getElementById('date').appendChild(newText);
 

})
