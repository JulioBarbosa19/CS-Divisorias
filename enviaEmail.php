<?php


if (isset($_POST['email']) && !empty($_POST['email'])) {
    $nome = addslashes($_POST['email']);
    $nome = addslashes($_POST['assunto']);
    $nome = addslashes($_POST['mensagem']);

    $to = "juliocesarb.silva11@gmail.com";
    $subject = "Contato - teste CS-Divisorias";
    $body = "Email: " . $email . "\n" .
        "Mensagem: " . $mensagem;

    $header = "From:juliocesarb.silva@hotmail.com" . "\r\n" . "Reply-to:" . $email . "\e\n" . "X=Mailer:PHP/" . phpversion();
    if (mail($to, $subject, $body, $header)) {
        echo "Email enviado com sucesso";
    } else {
        echo "email não enviado";
    }
}