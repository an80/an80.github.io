<?php
$error=''; //Variable to Store error message;
if(isset($_POST['submit'])){
 if(empty($_POST['email']) || empty($_POST['password'])){
 $error = "emailname or Passwordword is Invalid";
 }
 else
 {
 //Define $email and $password
 $email=$_POST['email'];
 $password=$_POST['password'];
 //Establishing Connection with server by passwording server_name, email_id and password as a patameter
 $conn = mysqli_connect("localhost", "root", "","honey");
 $sql="SELECT * FROM huney WHERE password='$password' AND email='$email'";
 //Selecting Database
 //$db = mysqli_select_db($conn, "honey");
 //sql query to fetch information of registerd email and finds email match.
 $query = mysqli_query($conn,$sql) or trigger_error("Query Failed! SQL: $sql - Error: ".mysqli_error($conn), E_USER_ERROR);
 
 $rows = mysqli_num_rows($query);
 if($rows == 1){
 header("Location:welcome.php"); // Redirecting to other page
 }
 else
 {
 $error = "Email of Password is Invalid";
 }
 mysqli_close($conn); // Closing connection
 }
}

?>