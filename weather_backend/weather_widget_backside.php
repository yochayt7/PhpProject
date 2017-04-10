<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>blabla </title><br />

</head>

<body>
<?php
//$city = $_POST['city'];
//$country = $_POST['country'];
$city = 'ashdod';
$country = 'israel';


$json_string = file_get_contents("http://api.wunderground.com/api/fd2a3132a3ace240/geolookup/conditions/q/$country/$city.json");
$parsed_json = json_decode($json_string);
$temp_c = $parsed_json->{'current_observation'}->{'temp_c'};
$jsonRet = [
        "city"=> $city,
        "country"=>$country,
        "temp" => $temp_c
];
echo (json_encode($jsonRet));

?>
</body>
</html>



