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
     
     $servername = getenv('IP');
     $username = "root";
     $password = "asdf123";
     $database = "Mortymanager";
     $dbport = 3306;
     $db = new mysqli($servername, $username, $password, $database, $dbport);
     
     if ($db->connect_error) {
       die("Connection failed: " . $db->connect_error);
     }
     echo "Connected successfully (" . $db->host_info . ")";
     
     $query = "select * from users";
     $result = mysqli_query($db, $query);
     while ($row = mysqli_fetch_assoc($result)) {
       echo "The ID is: " . $row['id'] . " and username is: " . $row['username'];
     }





     ?>
  </body>
</html>
