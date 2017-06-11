<?php
$servername = "52.59.229.170";
$username = "root";
$password = "Oe13233456";
$dbname = "projectc";


// Create dataBase
$conn = new mysqli($servername,$username,$password,$dbname,22);
// Check dataBase
if ($conn->connect_error) {
    die("dataBase failed: " . $conn->connect_error);
}
/**
 * Created by PhpStorm.
 * User: Yochay
 * Date: 28-Mar-17
 * Time: 7:51 PM
 */
?>