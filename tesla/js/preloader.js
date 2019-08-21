$(document).ready(function() {
	$('.step .next').click(function() {
        $(this).parent().css('display', 'none');
        $(this).parent().next().css('display', 'block');
      });
      $('.step .last').click(function() {
        $(this).parent().css('display', 'none');
        $(this).parent().prev().css('display', 'block');
      });
});
$(document).ready(function() {
  $('#btn-step2').click(function() {
    $('.step3').show(1000);
    setTimeout(function() {
      $('.step3').hide();
      if ($('.step3').hide()) {
        $('.step4').show()
        document.getElementById('caption').innerHTML = 'Данные будут отправлены на обработку'
      }
    }, 3000);
  });
});

$('#btn-next').click(function() {
		document.getElementById('caption').innerHTML = 'Шаг 2. Напряжение питания'
	})
$('#btn-step2-back').click(function() {
		document.getElementById('caption').innerHTML = 'Шаг 1.  Класс оборудования'
	})
$('#btn-step2').click(function() {
    document.getElementById('caption').innerHTML = 'Спасибо за уделенное время'
  })