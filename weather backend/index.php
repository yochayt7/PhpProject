<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>blabla </title><br />
    <form action="form.html" method="post">
        <input type="submit" value="new city">
    </form>

</head>
<body>
<?php
$city = $_POST['city'];
$country = $_POST['country'];

$json_string = file_get_contents("http://api.wunderground.com/api/fd2a3132a3ace240/geolookup/conditions/q/$country/$city.json");
$parsed_json = json_decode($json_string);
$location = $parsed_json->{'location'}->{'city'};
$temp_c = $parsed_json->{'current_observation'}->{'temp_c'};
echo "Current temperature in ${location} is: ${temp_c} celsius. \n";
?>
</body>
</html>



