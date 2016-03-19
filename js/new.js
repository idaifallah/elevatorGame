var imagesArray = ['pink.png', 'purple.png', 'red.png', 'green.png', 'yellow.png', 'blue.png'];
var countFloor = 0;//to check elevator in which floor is
var gameover = false;
function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            alert('Game Over');
            location.reload();
			gameover = true;
        }
    }, 1000);
}

var counter = 500;
var interval = setInterval(randomTimeImageDisplayer, counter);
var randomTimeImageDisplayer = function(){
	console.log("displayImage please");
	displayImage();
    clearInterval(interval);
    counter = Math.floor((Math.random() * 1700) + 500);
    interval = setInterval(randomTimeImageDisplayer, counter);
}

window.onload = function () {
    var Minute = 60, display = document.querySelector('#time');
    startTimer(Minute, display);
	randomTimeImageDisplayer();
};

function displayImage(){
	var randomnumber = Math.floor((Math.random() * 6));
	var bomb = "floor" + randomnumber;
	var num = Math.floor((Math.random() * 6));
	if (randomnumber == num+1) {
		num++;
	}
	var img = '<img src="images/'+imagesArray[num]+'" class="out"/>'
	document.getElementById(bomb).innerHTML = img;
}