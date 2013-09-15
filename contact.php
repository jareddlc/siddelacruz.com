<?php

$name = trim($_POST['name']);
$email = trim($_POST['email']);
$text = trim($_POST['text']);

if(!empty($name) && !empty($email))
{
  // Confirmation mail
  $to = "sid@siddelacruz.com";
  $subject = "Contact Email";
  $message = "From: " . $name . "\r\n" . "Email: " . $email . "\r\n" . "Message:\r\n" . $text;
  $headers = "From:" . $email;
  mail($to, $subject, $message, $headers);
  echo json_encode("200");
}
else
  echo json_encode("501");

?>