<?php
require 'connect.inc.php';

$query = "SELECT username, password, email FROM users";

$result =  $conn->query($query);


if($result->num_rows >0) {
    while($row = $result->fetch_assoc()){
        echo "username: " . $row["username"]. " - email: " . $row["email"]. "password: " .$row["password"]. "<br>";
    }
}
else{
    echo '0 results';
}
$conn->query('ALTER TABLE users ADD id INT AUTO_INCREMENT UNIQUE FIRST ');
#$conn->query('ALTER TABLE users DROP id');
$conn->close();
?>
