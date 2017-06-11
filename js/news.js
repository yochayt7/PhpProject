/*jslint browser:true */
'use strict';

var News = new XMLHttpRequest();
var cObj;
var fObj;

// GET THE CONDITIONS
News.open('POST', 'http://localhost/news_widget/news.php', true);
News.responseType = 'text';
News.send(null);

News.onload = function() {
    if (News.status === 200)
    {
        cObj = JSON.parse(News.responseText); 
        console.log(cObj);
    } 
//    First News
    document.getElementById('author1').innerHTML=cObj.articles[0].author;
    var imagePath = cObj.articles[0].image;
    document.getElementById('title1').innerHTML=cObj.articles[0].title;
    document.getElementById('description1').innerHTML=cObj.articles[0].description;
//    Second News
    document.getElementById('author2').innerHTML=cObj.articles[1].author;
    var imagePath = cObj.articles[1].image;
    document.getElementById('title2').innerHTML=cObj.articles[1].title;
    document.getElementById('description2').innerHTML=cObj.articles[1].description;
//    third News
    document.getElementById('author3').innerHTML=cObj.articles[2].author;
    var imagePath = cObj.articles[2].image;
    document.getElementById('title3').innerHTML=cObj.articles[2].title;
    document.getElementById('description3').innerHTML=cObj.articles[2].description;
//    Fourth News
    document.getElementById('author4').innerHTML=cObj.articles[3].author;
    var imagePath = cObj.articles[3].image;
    document.getElementById('title4').innerHTML=cObj.articles[3].title;
    document.getElementById('description4').innerHTML=cObj.articles[3].description;

//    Fifth News
    document.getElementById('author5').innerHTML=cObj.articles[4].author;
    var imagePath = cObj.articles[4].image;
    document.getElementById('title5').innerHTML=cObj.articles[4].title;
    document.getElementById('description5').innerHTML=cObj.articles[4].description;






}