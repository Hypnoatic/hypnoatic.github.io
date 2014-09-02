$(document).ready(function (){
	var d = new Date();
	document.getElementById('date').appendChild('Posted on:' + d.getDate() + ' ' +(d.getMonth + 1) + ' ' + d.getFullYear() + 'at ' + d.getHours() + ':' + d.getMinutes()';)
 

})
