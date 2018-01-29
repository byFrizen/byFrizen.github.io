function timer() {
    var nowDate = new Date();
    var achiveDate = new Date(2018,3,13,0,0,0); //Задаем дату, к которой будет осуществляться обратный отсчет
    var result = (achiveDate - nowDate)+1000;
    if (result < 0) {
        var elmnt = document.getElementById('tnum');
        elmnt.innerHTML = ' - : - - : - - : - - ';
        return undefined;
    }
    var seconds = Math.floor((result/1000)%60);
    var minutes = Math.floor((result/1000/60)%60);
    var hours = Math.floor((result/1000/60/60)%24);
    var days = Math.floor(result/1000/60/60/24);
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;
    var elmnt = document.getElementById('tnum');
    elmnt.innerHTML = days + ':' + hours + ':' + minutes + ':' + seconds;
    setTimeout(timer, 1000);
}


function timerE() {
    var nowDate = new Date();
    var achiveDate = new Date(2018,5,6,0,0,0); //Задаем дату, к которой будет осуществляться обратный отсчет
    var result = (achiveDate - nowDate)+1000;
    if (result < 0) {
        var elmnt = document.getElementById('tel');
        elmnt.innerHTML = ' - : - - : - - : - - ';
        return undefined;
    }
    var seconds = Math.floor((result/1000)%60);
    var minutes = Math.floor((result/1000/60)%60);
    var hours = Math.floor((result/1000/60/60)%24);
    var days = Math.floor(result/1000/60/60/24);
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;
    var elmnt = document.getElementById('tel');
    elmnt.innerHTML = days + ':' + hours + ':' + minutes + ':' + seconds;
    setTimeout(timerE, 1000);
}

function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 26.627, lng:   -70.8699}, //Координаты начального положения на карте
          scrollwhell: true, // Скрол колесиком
          zoom: 5 //маштаб при открытии  стр
        });
}


$('.tab').click(function(){
	var ta = $('.tactive');
	if($(this) == ta){
		console.log('1');
			}
	else{
		var tabs = $('.tab'),
			cont = $('.tab-cont');
		tabs.removeClass('tactive');
		cont.removeClass('cactive');

		$(this).addClass('tactive');
		cont.eq($(this).index()).addClass('cactive');
	}
});

$(document).ready(function(){
    timer();
    timerE();
});
