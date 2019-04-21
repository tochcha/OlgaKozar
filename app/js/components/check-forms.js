function checkParams_1_1() {
	var inptext1 = $('#inptext1').val();
	var textarea1 = $('#textarea1').val();

	if (inptext1.length != 0 && textarea1.length != 0) {
		$('#step-1').addClass('active');
	} else {
		$('#step-1').removeClass('active');
	}
};
function checkParams_1_2() {
	var inptext2 = $('#inptext2').val();
	var textarea2 = $('#textarea2').val();

	if (inptext2.length != 0 && textarea2.length != 0) {
		$('#step-1').addClass('active');
	} else {
		$('#step-1').removeClass('active');
	}
};
function checkParams_1_3() {
	var inptext3 = $('#inptext3').val();
	var inptext4 = $('#inptext4').val();
	var textarea3 = $('#textarea3').val();

	if (inptext3.length != 0 && inptext4.length != 0 && textarea3.length != 0) {
		$('#step-1').addClass('active');
	} else {
		$('#step-1').removeClass('active');
	}
};
function checkParams_1_5() {
	var inptext5 = $('#inptext5').val();
	var textarea5 = $('#textarea5').val();

	if (inptext5.length != 0 && textarea5.length != 0) {
		$('#step-1').addClass('active');
	} else {
		$('#step-1').removeClass('active');
	}
};
function checkParams_1_6() {
	var inptext6 = $('#inptext6').val();
	var textarea6 = $('#textarea6').val();

	if (inptext6.length != 0 && textarea6.length != 0) {
		$('#step-1').addClass('active');
	} else {
		$('#step-1').removeClass('active');
	}
};
function checkParams_1_7() {
	var inptext7 = $('#inptext7').val();
	var inptext8 = $('#inptext8').val();
	var inptext9 = $('#inptext9').val();
	var inptext10 = $('#inptext10').val();
	var textarea7 = $('#textarea7').val();

	if (inptext7.length != 0 && inptext8.length != 0 && inptext9.length != 0 && inptext10.length != 0 && textarea7.length != 0) {
		$('#step-1').addClass('active');
	} else {
		$('#step-1').removeClass('active');
	}
};
function checkParams_1_8() {
	var inptext11 = $('#inptext11').val();
	var inptext12 = $('#inptext12').val();
	var inptext13 = $('#inptext13').val();
	var textarea8 = $('#textarea8').val();

	if (inptext11.length != 0 && inptext12.length != 0 && inptext13.length != 0 && inptext10.length != 0 && textarea8.length != 0) {
		$('#step-1').addClass('active');
	} else {
		$('#step-1').removeClass('active');
	}
};
function checkParams_1_9() {
	var inptext14 = $('#inptext14').val();
	var inptext15 = $('#inptext15').val();
	var inptext16 = $('#inptext16').val();
	var inptext17 = $('#inptext17').val();
	var textarea9 = $('#textarea9').val();

	if (inptext14.length != 0 && inptext15.length != 0 && inptext16.length != 0 && inptext17.length != 0 && textarea9.length != 0) {
		$('#step-1').addClass('active');
	} else {
		$('#step-1').removeClass('active');
	}
};

$("#step-1.reg__item input[type=radio]").change(function () {
	$(this).parents('.reg__item').find("input[type=text], textarea").val("");
	$(this).parents('#step-1').removeClass('active');
});

if ($('.reg__item input, .reg__item textarea').on('focus', function (e) {
		$(this).parents('.reg__item').addClass('focus');
	}));
if ($('.reg__item input, .reg__item textarea').on('focusout', function (e) {
		$(this).parents('.reg__item').removeClass('focus');
	}));


$(".reg__item input[type=radio]").change(function () {
	if (this.checked) {
		$(this).parents('.reg__item').addClass('focus');
	}
});



$("#radiostep-2").change(function () {
	if (this.checked) {
		$(this).parents('.reg__item').addClass('for-work');
	}
});
$(".reg__item input[type=radio]").change(function () {
	if (!$("#radiostep-2").is(":checked")) {
    $(this).parents('.reg__item').removeClass('for-work');
	}
});

$("#radiostep-3").change(function () {
	if (this.checked) {
		$(this).parents('.reg__item').addClass('for-vacancy');
	}
});
$(".reg__item input[type=radio]").change(function () {
	if (!$("#radiostep-3").is(":checked")) {
    $(this).parents('.reg__item').removeClass('for-vacancy');
	}
});

$("#radiostep-4").change(function () {
	if (this.checked) {
		$(this).parents('.reg__item').addClass('for-exam');
	}
});
$(".reg__item input[type=radio]").change(function () {
	if (!$("#radiostep-4").is(":checked")) {
    $(this).parents('.reg__item').removeClass('for-exam');
	}
});

$("#radiostep-4").change(function () {
	if (this.checked) {
		$(this).parents('.reg__item').addClass('for-inter for-inter-ielts');
		$('#radiostep-7').attr('checked', 'checked');
	}
});
$(".reg__item input[type=radio]").change(function () {
	if (!$("#radiostep-4").is(":checked")) {
    $(this).parents('.reg__item').removeClass('for-inter for-inter-ielts');
    $(this).parents('.reg__item').removeClass('for-inter for-inter-toefl');
    $(this).parents('.reg__item').removeClass('for-inter for-inter-other');
	}
});

$("#radiostep-5").change(function () {
	if (this.checked) {
		$(this).parents('.reg__item').addClass('for-study');
	}
});
$(".reg__item input[type=radio]").change(function () {
	if (!$("#radiostep-5").is(":checked")) {
    $(this).parents('.reg__item').removeClass('for-study');
	}
});

$("#radiostep-6").change(function () {
	if (this.checked) {
		$(this).parents('.reg__item').addClass('for-other');
	}
});
$(".reg__item input[type=radio]").change(function () {
	if (!$("#radiostep-6").is(":checked")) {
    $(this).parents('.reg__item').removeClass('for-other');
	}
});

$("#radiostep-7").change(function () {
	if (this.checked) {
		$(this).parents('.reg__item').addClass('for-inter-ielts');
	}
});
$(".reg__item input[type=radio]").change(function () {
	if (!$("#radiostep-7").is(":checked")) {
    $(this).parents('.reg__item').removeClass('for-inter-ielts');
	}
});

$("#radiostep-8").change(function () {
	if (this.checked) {
		$(this).parents('.reg__item').addClass('for-inter-toefl');
	}
});
$(".reg__item input[type=radio]").change(function () {
	if (!$("#radiostep-8").is(":checked")) {
    $(this).parents('.reg__item').removeClass('for-inter-toefl');
	}
});

$("#radiostep-9").change(function () {
	if (this.checked) {
		$(this).parents('.reg__item').addClass('for-inter-other');
	}
});
$(".reg__item input[type=radio]").change(function () {
	if (!$("#radiostep-9").is(":checked")) {
    $(this).parents('.reg__item').removeClass('for-inter-other');
	}
});



function checkParams_2_1() {
	var textarea10 = $('#textarea10').val();

	if (textarea10.length >= 10) {
		$('#step-2').addClass('active');
	} else {
		$('#step-2').removeClass('active');
	}
};

function checkParams_3_1() {
	var textarea11 = $('#textarea11').val();

	if (textarea11.length >= 10) {
		$('#step-3').addClass('active');
	} else {
		$('#step-3').removeClass('active');
	}
};

function checkParams_4_1() {
	var step_4_1 = $('#step_4_1').val();
	var step_4_2 = $('#step_4_2').val();
	var step_4_3 = $('#step_4_3').val();

	if (step_4_1.length != 0 && step_4_2.length != 0 && step_4_3.length != 0) {
		$('#step-4').addClass('active');
	} else {
		$('#step-4').removeClass('active');
	}
};

function checkParams_5_1() {
	var textarea12 = $('#textarea12').val();

	if (textarea12.length >= 10) {
		/*$('#submit2').removeAttr('disabled');*/
		$('#step-5').addClass('active');
	} else {
		/*$('#submit2').attr('disabled', 'disabled');*/
		$('#step-5').removeClass('active');
	}
};

/*$("input").click(function () {
	if ( $("#step-4").hasClass("active") ) {
		$('#submit2').removeAttr('disabled');
		alert("У элемента задан класс sizeable!");
	}
});*/
