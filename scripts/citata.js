$('#citata').click(function(){
	var today = new Date();
	var d = today.getDay();
	var citats = ["Цените моменты до того, как они станут воспоминаниями.",
				  "Все проходит, да не все забывается",
				  "Каждое мгновение жизни божественно тем, что оно никогда больше не повторится.",
				  "Жизнь-это битва,где даже слабый борется за свое существование.",
				  "У жизни только один недостаток – она заканчивается.",
				  "Все мы погрязли в болоте, но некоторые из нас смотрят на звезды",
				  "Смысл жизни в том, что она имеет свой конец"];
	console.log(citats.length);
	$('#citataBlock').text(citats[d]);
	$('#citataBlock').toggleClass('citataActive');
	$('#citataBlock').fadeToggle();
});