
<?php
/** call to function file to work with the api key  */
require_once 'functions.php';

$paper=$_GET['paper'];

get_jason($paper);

/**  retorn of json object */

$json=$_SESSION['json_str'];

echo $json;

?>
