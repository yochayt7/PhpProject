<?php
$servername = "localhost";
$username = "abc";
$password = "Bb123456";
$dbname = "projectc";
// Create connection
$conn = new mysqli($servername,$username,$password,$dbname);
// Check connection
if ($conn->connect_error) {
    die("connection failed: " . $conn->connect_error);
}
/**
 * Created by PhpStorm.
 * User: Yochay
 * Date: 28-Mar-17
 * Time: 7:51 PM
 */