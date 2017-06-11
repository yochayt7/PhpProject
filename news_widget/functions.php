<?php
session_start();
?>

<?php

/** the function using the api key to get jason */
function get_jason($paper){

    if(!empty($paper)) {

        $api_kay = "https://newsapi.org/v1/articles?source=$paper&sortBy=top&apiKey=f532d26193234ac98d0b1ad378ff5e88";
        $news_json = file_get_contents($api_kay);
        $news_array = json_decode($news_json, true);
        get_jason_obj($news_array);

    }

}
/** function that switch the jason to object and send it back to news.php file */
function get_jason_obj($news_array){

    $obj = new stdClass();

    $obj->articles = array(4);

    for($i=0;$i<4;$i++){

        $obj->articles[$i]=new stdClass();
        $obj->articles[$i]->title=$news_array['articles'][$i]['title'];
        $obj->articles[$i]->description = $news_array['articles'][$i]['description'];
        $obj->articles[$i]->img = $news_array['articles'][$i]['urlToImage'];
        $obj->articles[$i]->text = $news_array['articles'][$i]['url'];

    }

    $json=json_encode($obj);
    $_SESSION['json_str']=$json;

}

require_once 'news.php';

?>
