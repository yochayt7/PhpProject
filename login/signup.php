<?php
require '../connect.inc.php';

$username = $_POST['username'];
$password = $_POST{'password'};
$email = $_POST['email'];
if ($username == '' || $password == '')
{
    $msg = "You must enter all fields";
}
else {
    $sql = "INSERT INTO users (username, password, email)
    VALUES ('$username', '$password', '$email')";
    $query = $conn->query($sql);
    if ($query) {
        $jsonAns = ['signedup'=> 'true'];
        header('content-type: application/json');
        echo json_encode($jsonAns);

    }
    else{
        $msg = "Could not successfully run query ($sql) from DB.";
        $jsonAns = ['signedup'=> 'false'];
        header('content-type: application/json');
        echo json_encode($jsonAns);
        exit;
    }
}
$conn->close();