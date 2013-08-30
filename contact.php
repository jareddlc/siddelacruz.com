<?php

$name = trim($_POST['name']);
$email = trim($_POST['email']);

if(!empty($name) && !empty($email))
{
  // Confirmation mail
  $to = "sid@siddelacruz.com";
  $subject = "Contact Email";
  $message = trim($_POST['text']);
  $headers = $email . "\r\n" . 'X-Mailer: PHP/' . phpversion();
  mail($to, $subject, $message, $headers);
  echo json_encode("200");
}
else
  echo json_encode("501");

?>