<html>
<head>
    <title>Login</title>
    <link rel="stylesheet" href="login/login_style.css"/>
    <script src="login/login_js.js"></script>
</head>
<body>
<div class="container">
    <div class="main">
        <h2>please login with your username\pass.</h2>
        <form id="form_id" method="post" name="myform">
            <label>User Name :</label>
            <input type="text" name="username" id="username"/>
            <label>Password :</label>
            <input type="password" name="password" id="password"/>
            <input type="button" value="Login" id="submit" onclick="validate()"/>
        </form>
        <form action="login/signingup.html" method="post">
            <input type="submit" value="sign up">
        </form>
    </div>
</div>
</body>
</html>