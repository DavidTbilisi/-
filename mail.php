<?php
/**
 * Created by PhpStorm.
 * User: david
 * Date: 12/7/2017
 * Time: 7:55 PM
 */


if( isset($_POST['name']) && isset($_POST['phone'])){
	$name    = $_POST['name'];
	$phone   = $_POST['phone'];
	$cms     = isset($_POST['cms'])? $_POST['cms'] :"";
	$comment = isset($_POST['comment'])? $_POST['comment'] :"";
	$message = <<<MSG
		გამარჯობა. ჩემი სახელია $name და ტელ: $phone. 
		მინდა $cms სამართავ პანელზე აწყობილი საიტი
		პ.ს: $comment;
MSG;


//send email
	mail("davidchincharashvili@gmail.com",  'ახალი შეკვეთა',$message);
}
?>