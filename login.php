<?php


/* 
    LOGIN VERIFICATION IS A WORK IN PROGRESS AND NOT FUNCTIONING CORRECTLY
    Currently the user is directed to the main page regardless of correct username or password.
*/



$db = new mysqli(getenv('IP'), "root", "asdf123", "Mortymanager", 3306);
$user = $_POST['user'];
$pass = $_POST['pass'];
$query = "select password from users where username='$user'";


//$result = mysqli_query($db, $query);
//$row = mysqli_fetch_assoc($result);
$hashPass = mysqli_query($db, $query);
if (password_verify($pass, $hashPass)) {
    //echo "correct";
    header("Location: main.html");
} else {
    //echo "no match";
    header("Location: main.html");
}






?>