var imagesArray = ['pink', 'purple', 'red', 'green', 'yellow', 'blue'];
var countFloor = 0;//to check elevator in which floor is
var randomTarget = sc = 0, backgroundMusic = new Audio('NatureFurious.mp3');
function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            //alert('Game Over');
            //location.reload();
			if (sc >= randomTarget) {
				alert("You Win");
				location.reload();
			} else {
				alert("You Failed :P");
				location.reload();
			}
				alert("You Failed :P");
				location.reload();
			}
        }
    }, 1000);
}
var counter = 500;
var interval = setInterval(randomTimeImageDisplayer, counter);
var randomTimeImageDisplayer = function(){	
	displayImage();
    clearInterval(interval);
    counter = Math.floor((Math.random() * 1700) + 500);
    interval = setInterval(randomTimeImageDisplayer, counter);
}

window.onload = function () {
    var Minute = 60, display = document.querySelector('#time');
    startTimer(Minute, display);
	randomTimeImageDisplayer();
    randomTarget = Math.floor((Math.random() * 15)) + 15;
    console.log(randomTarget);
    $("#target").html('Target: ' + randomTarget);
    backgroundMusic.play();
};

function displayImage(){
	var randomnumber = Math.floor((Math.random() * 6));
    if(randomnumber == 0){
        randomnumber++;
    }
	var bomb = "floor" + randomnumber;
	var num = Math.floor((Math.random() * 6));
	if (randomnumber == num+1) {
		num++;
	}
	var img = '<img src="images/'+imagesArray[num]+'.png" class="out" id="'+imagesArray[num]+'Character"/>'
	document.getElementById(bomb).innerHTML = img;
}