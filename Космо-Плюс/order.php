<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru-ru" lang="ru-ru" dir="ltr">
<head>

 <meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title>Поздравляем! Ваш заказ принят!</title>
	<?php
	
    // Генерируем сообщение
	
       
		 
       
			$message.= iconv("UTF-8", "UTF-8", "Имя: ")."$name \n";
			$message.= iconv("UTF-8", "UTF-8", "Телефон: ")."$phone \n";
		
		
      

    // $to -- ЗДЕСЬ ВВОДИМ ПОЧТОВЫЕ АДРЕСА, НА КОТОРЫЕ ОТПРАВЛЯТЬ РЕЗУЛЬТАТ.
      $to = "testmail@gmail.com"; // если ящиков несколько - через запятую и пробел : "me@localhost.com, me@localhost.com"

    // $subject -- Тема письма
        $subject = "Cosmo plus заявка";

        $headers  = "MIME-Version: 1.0";
        $headers .= "Content-type: text/html; charset=windows-1251" . "\r\n";
    // После From: -- вводим имя и адрес отправителя.
        $headers .= "From:".iconv("windows-1251", "UTF-8", "zakaz")."<zaka>" . "\r\n";

        // Отправляем
        mail($to, '=?utf-8?B?' . base64_encode($subject). '?=', $message, $headers);
    
	
?>
	
	
	
<link rel="stylesheet" type="text/css" href="order_files/index.css" media="all">


</head>
<body>

	<div class="wrap_block_success">
		<div class="block_success">					
			<h2>Поздравляем! Ваш заказ принят!</h2>
			
<a href="more.php" class="url_more_info" target="_blank">Нажмите здесь для получения более подробной информации о заказе</a>
			<p class="success">В ближайшее время с вами свяжется оператор для подтверждения заказа. Пожалуйста, включите ваш контактный телефон.</p>
			
			<h3>Пожалуйста, проверьте правильность введенной вами информации</h3>
			<div class="wrap_list_info">
				<ul class="list_info">
					 					 <li><span>Ваш телефон: </span><?php echo $phone; ?></li> 				
					 </ul>
			</div>
				<p class="fail">Если вы ошиблись при заполнени формы, то, пожалуйста, <a href="index.php">заполните заявку еще раз</a></p>
				<hr>
				<br>
				<div class="clear"></div>
		
			</form>
			
		</div>

	</div>
</body>
</html>
