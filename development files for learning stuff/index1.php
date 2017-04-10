<!DOCTYPE html>
<html>
<head>
    <?php
    $city = $_POST['city'];
    $country = $_POST['country'];
    $apikey = "http://api.openweathermap.org/data/2.5/forecast/weather?q=$city&APPID=bafb400646af181557431aa2bf9d1644&units=metric";
    $weather_data = file_get_contents($apikey);
    $json = json_decode($weather_data, TRUE);


    $user_temp = $json['list'][0]['main']['temp'];
    echo "the weather in $city is $user_temp";
    ?>

</head>
</html>