<?php
require_once('src/PHPMailer.php');
require_once('src/SMTP.php');


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = isset($_POST['email']) ? $_POST['email'] : 'Não Informado';
$assunto = isset($_POST['assunto']) ? $_POST['assunto'] : 'Não Informado';
$mensagem = isset($_POST['mensagem']);
$date = date('d/m/Y H:i:s');
if ($email && $mensagem) {
    $mail = new PHPMailer();
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'juliocesarb.silva11@gmail.com';
    $email->Password = '123';
    $mail->Port = 587;

    $mail->setFrom('juliocesarb.silva11@gmail.com');
    $mail->addAddress('juliocesab.silva@hotmail.com');

    $mail->isHTML(true);
    $mail->Subject = $assunto;
    $email->Body = '
Email: {$email};
Assunto: {$assunto};
Mensagem: {$mensagem};
Data/Hora: {$data};
';

    if ($mail->send()) {
        echo 'Email enviado com sucesso!!!';
    } else {
        echo 'Email Não Enviado!!!!';
    }
}