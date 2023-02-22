<?php
header("Content-Type: application/json; charset=UTF-8");

define('DB_SERVER', 'mariadb');
define('DB_USERNAME', 'dwec');
define('DB_PASSWORD', 'dwec');
define('DB_NAME', 'dwec');

$conexion = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
$conexion->set_charset("utf8");

if ($conexion->connect_error) {
  $error = "Error en la conexion : "  . $conexion->connect_error;
  echo json_encode($error);
  exit(1);
}

$error = "";

// Procesar datros cuando se realiza la petición
if (($request = file_get_contents('php://input')) && $_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = json_decode($request, false);

  // Validar symbol
  if (property_exists($data, 'symbol') && isset($data->symbol) && !empty(trim($data->symbol))) {
    $symbol = trim($data->symbol);
  } else {
  $error = $error . "Introduzca el símbolo. ";
  }

  // Validar name
  if (property_exists($data, 'name') && isset($data->name) && !empty(trim($data->name))) {
    $name = trim($data->name);
  } else {
    $error = $error . "Introduzca el nombre. ";
  }

  // Validar image_url
  if (property_exists($data, 'image_url') && isset($data->image_url) && !empty(trim($data->image_url))) {
    $image_url = trim($data->image_url);
  } else {
    $error = $error . "Introduzca la URL de la imagen. ";
  }


  // Validar current_price_eur
  if (property_exists($data, 'current_price_eur') && isset($data->current_price_eur) && !empty(trim($data->current_price_eur))) {
    $current_price_eur = trim($data->current_price_eur);
  } else {
    $error = $error . "Introduzca el precio actual. ";
  }

  // Si no hay errores, procedemos a insertar en la BD
  if (empty($error)) {
    // Preparar la sentencia
    $sql = "REPLACE INTO `monedas` (`symbol`, `name`, `image_url`, `current_price_eur`) VALUES (?,?,?,?)";

    if ($stmt = $conexion->prepare($sql)) {
      // Enlaza las variables a los parámetros
      $stmt->bind_param(
        'sssd',
        $param_symbol,
        $param_name,
        $param_image_url,
        $param_current_price_eur
      );

      // Establecer los parámetros
      $param_symbol = $symbol;
      $param_name = $name;
      $param_image_url = $image_url;
      $param_current_price_eur = $current_price_eur;

      // Ejecutar la sentencia
      if (!$stmt->execute()) {
        // Ha habido algún error. Devolver json con error de insercion en BD
        $error = array('resultado' => "Error al insertar en la BD. ");
        echo json_encode($error);
        exit(1);
      }
    } else {
      $error = array('resultado' => "Error al preparar la sentencia");
      echo json_encode($error);
      exit(1);
    }
    // Cerramos la sentencia y la conexion
    mysqli_stmt_close($stmt);
  } else {
    $error = array('resultado' => $error);
    echo json_encode($error);
    exit(1);
  }

  // Se han ejecutado todas las inserciones correctamente
  $sql = "SELECT `symbol`, `name`, `image_url`, `current_price_eur` FROM `monedas` WHERE `name` = '$name'";
  $resultado = $conexion->query($sql);
  $salida = array();

  if ($resultado && $resultado->num_rows > 0) {
    // Se ha creado corretamente, devolver json con "episodio registrado"
    $salida = array('resultado' => "Criptomoneda ". $name . " guardada correctamente");
  }

  echo json_encode($salida);
  exit(1);
} else {
  $error = array('resultado' => "No es un metodo post.");
  echo json_encode($error);
}