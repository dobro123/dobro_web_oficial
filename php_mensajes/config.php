<?php
  $host = "localhost";
  $username = "Dobromir";
  $password = "chocolate";
  $dbname = "ferias_mercados";

  $enlace = mysqli_connect($host, $username, $password, $dbname);
  try {
	  $db = new PDO("mysql:host={$host};dbname={$dbname}", $username, $password);
	  $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $exception){
	  die("Connection error: " . $exception->getMessage());
  }
?>