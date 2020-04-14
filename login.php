<?php 
$db = new mysqli(getenv('IP'), "root", "asdf123", "Mortymanager", 3306);
$query = "select * from users where username = '" . $_POST['userlog'] . "' and password = '" . $_POST['passlog'] . "'";

$result = mysqli_query($db, $query);

$row = mysqli_fetch_assoc($result);
if (!$row) {
    echo "user not found";
} else {
    header("Location: main.html");
}

?>