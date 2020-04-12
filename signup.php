<!-- SIGN UP PAGE -->
<!DOCTYPE html>
<html>
  <head>
    <title>Sign Up - Mortymanager</title>
    <link href="css/global.css" rel="stylesheet">
    <link href="css/signup.css" rel="stylesheet">
  </head>
  <body>
    <div class="container">
      <div style="text-align: center; font-size: 50px">
	Create an account
      </div>
      <label for="username">Username:</label>
      <input type="text" name="username" required></br>
      <label for="email">Email: </label>
      <input type="text" name="email" required></br>
      <label for="password">Password</label>
      <input type="text" name="password" required></br>
      <button type="submit">Sign up</button>
    </div>


    <?php 
     $dbServerName = "localhost";
     $dbUsername = "root";
     $dbPassword = "Weinersaregr8!";

     $conn = mysqli($dbServerName, $dbUsername, $dbPassword);





     ?>
  </body>
</html>
