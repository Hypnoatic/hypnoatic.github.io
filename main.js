$(document).ready(function (){
	var test = 17;
	var d = new Date();
	var text = "Posted on: "
	text += d.getDate() + "/"
	text += (d.getMonth() + 1) + "/"
	text += d.getFullYear() + " "
	text += "at " 
	text += checkHour(d.getHours())
	text += ":"
	text += d.getMinutes()
	text += " "
	text += checkAM(d.getHours())
	$('p.date').text(text);
	var height = $('.post p').height();
	$('.post').css("height", height);

	function checkHour(hour) {
		if (hour - 12 <= 0 ) return hour;
		else {
			return hour - 12;
		}
	
	}

	function checkAM(hour) {
		return (hour < 12 ? "AM" : "PM")
		
	}

})
