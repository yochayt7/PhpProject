/**
 * Created by Yochay on 06-Apr-17.
 */

//signup function html calls to it
function signup(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    alert("im here!!!");
    var httpreq = new XMLHttpRequest();
    var response;
    var json_response;
    var bool;
    httpreq.open('POST','http://localhost/firstproject/login/signup.php', true);
    httpreq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    var sentData = "username=" +username + "&password=" + password + "&email=" +email;
    httpreq.onload = function () {
        response = httpreq.responseText;
        json_response = JSON.parse(response);
        bool = json_response['signedup'];
        if(bool == 'true'){
            alert("signed up successfully");
        }
        else{
            alert("error");
        }
    };
    httpreq.send(sentData);
}