<?php
  $servername = "localhost";
  $username = "Dobromir";
  $password = "chocolate";
  $dbname = "ferias_mercados";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  if(isset($_POST['enviar_mensaje'])){
  	$nombre = $_POST['nombre'];
  	$correo = $_POST['correo'];
  	$mensaje = $_POST['mensaje'];
  }

  $sql = "INSERT INTO msg_dobro (nombre, correo, mensaje)
  VALUES ('$nombre', '$correo', '$mensaje')";
  // use exec() because no results are returned
  $conn->exec($sql);
  echo "Mensaje Enviado";
} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}
header('location: ../index.html');
$conn = null;

?>