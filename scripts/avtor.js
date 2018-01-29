function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
       return true;
 }


$("form #name").blur(function(){
		var per_name =/[^А-ЯЁа-яёA-Za-z ]/i;
	if(per_name.test($("#name").val()))
	{
		alert("Только латинские и кирилические символы!");
		$(this).css("border-color", "red");
		$(this).focus();
		$(this).val("");

		
	}
	else{
		$(this).css("border-color", "none");
	}
});

$("form #eVal").blur(function(){
		var per_name =/^[A-Za-z0-9][A-Za-z0-9\.\-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]*$/i;
	if(per_name.test($("#eVal").val()))
	{
		$(this).css("border-color", "none");
	}
	else{
		
		alert("Не коректно введен эмаил!");
		$(this).css("border-color", "red");
		$(this).val("");
	}
});
$('textarea').keyup(function(){
	var	tlength = $('textarea').val().length;
$('#arealength').text("Кол-во символов: " + tlength);
});
$('.btnCode').click(function() {
	$('.btnCodeOn').toggleClass('activeCode');
	$('.btnCodeOff').toggleClass('activeCode');
	$('code').fadeToggle();
	$('code').toggleClass('activeCode');
});
