<?php

if (isset($_POST["login"])) {
    $db = mysqli_connect(getenv('IP'), "root", "asdf123", "Mortymanager");
    //$db = new mysqli(getenv('IP'), "root", "asdf123", "Mortymanager", 3306);
    $user = mysqli_real_escape_string($db, $_POST['user']);
    $pass = mysqli_real_escape_string($db, $_POST['pass']);
    $query = "select * from users where username='$user'";


    $result = mysqli_query($db, $query);
    //$row = mysqli_fetch_assoc($result);
    $result = mysqli_query($db, $query);
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_array($result)) {
            if (password_verify($pass, $row["password"])) {
                // return true;
                header("Location: main.html");
            } else {
                echo '<script>alert("Invalid Login.")</script>';
            }
        }
    } else {
        echo '<script>alert("Invalid Login.")</script>';
    }
}




// if (password_verify($pass, $hashPass)) {
//     //echo "correct";
//     header("Location: main.html");
// } else {
//     //echo "no match";
//     header("Location: login.html");
// }
?>

<!-- LOGIN html -->
<!DOCTYPE html>
<html>
  <head>
    <title>Login - Mortymanager</title>
    <link href="css/global.css" rel="stylesheet">
    <link href="css/signup.css" rel="stylesheet">
  </head>
  <body>
    <div class="container">
      <div style="text-align: center; font-size: 50px">
      	Login
      </div>
      <form method="post">
      <label for="user">Username:</label>
      <input type="text" name="user" required></br>
      <label for="pass">Password</label>
      <input type="password" name="pass" required></br>
      <button type="submit" name="login">Login</button>
      </form>
    </div>
  </body>
</html>