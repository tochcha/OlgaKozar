function checkParams() {
	var name = $('#name').val();
	var email = $('#email').val();
	var phone = $('#phone').val();
	var inptext1 = $('#inptext1').val();
	var textarea1 = $('#textarea1').val();

	if (name.length != 0 && email.length != 0 && phone.length != 0 && inptext1.length != 0 && textarea1.length != 0) {
		/*$('#submit').removeAttr('disabled');*/
		$('#step-1').addClass('active');
	} else {
		$('#step-1').removeClass('active');
	}
};

function checkParams2() {
	var name2 = $('#name2').val();
	var email2 = $('#email2').val();
	var phone2 = $('#phone2').val();

	if (name2.length != 0 && email2.length != 0 && phone2.length != 0) {
		$('#submit2').removeAttr('disabled');
		$('#step-2').addClass('active');
	} else {
		$('#submit2').attr('disabled', 'disabled');
		$('#step-2').removeClass('active');
	}
};

if ($('.reg__item input, .reg__item textarea').on('focus', function (e) {
		$(this).parents('.reg__item').addClass('focus');
	}));

if ($('.reg__item input, .reg__item textarea').on('focusout', function (e) {
		$(this).parents('.reg__item').removeClass('focus');
	}));


$(".reg__item input").change(function() {
    if(this.checked) {
        $(this).parents('.reg__item').addClass('focus');
    }
});


