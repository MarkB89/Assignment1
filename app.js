$(function () {
	$('#tabs .content').hide();
	$('#tabs nav .btn[data-tab="tab1"]').addClass("active");

	$('#tabs .content#tab1').show();

	$('#tabs nav').on('click', '.btn', btnOnClick);
});

function btnOnClick() {
		var tabID = $(this).data('tab');

		$('#tabs nav .btn').removeClass("active");

		$('#tabs .content').hide();

		$('#tabs .content#' + tabID).show();
		$(this).addClass("active");

	}