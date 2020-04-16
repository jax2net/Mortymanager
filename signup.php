    <?php 
     
     $db = new mysqli(getenv('IP'), "root", "asdf123", "Mortymanager", 3306);
     
     if ($db->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
     
     
     mysql_select_db("Mortymanager");
     
     if (!mysqli_select_db($db, 'Mortymanager')) {
         echo "database not selected </br>";
     }
    
     $username = $_POST['username'];
     $password = $_POST['password'];
     $hash = password_hash($password, PASSWORD_DEFAULT);
     
     
     $sql = "INSERT INTO users VALUES (null, '$username', '$hash')";
    
     
     
     if (!mysqli_query($db, $sql)) {
         echo 'That username is taken already. ';
     } else {
         header("Location: main.html");
     }

     ?>
