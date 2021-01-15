<?php
$assunto = $_POST['assunto'];
$corpo = "
Email: " . $_POST['email'];
"
Assunto: "  . $_POST['assunto'];
"
Mensagem: " . $_POST['mensagem'];
"";
mail('juliocesarb.silva11@gmail.com', $assunto, $corpo, 'From: juliocesarb.silva11@gmail.com');
echo 'Seus dados foram enviados com sucesso';