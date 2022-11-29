<?php
//$conn=mysqli_connect($server,$username,$password,$dbname);
if(isset($_POST['submit'])){
        if(!empty($_POST['name'])&&!empty($_POST['password'])&&!empty($_POST['address'])&&!empty($_POST['number'])&&!empty($_POST['email'])){
                
try {
$server="localhost";
$username="root";
$password="";
$dbname="honey";
        $conn = new PDO("mysql:host=$server;dbname=$dbname", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      
        // prepare sql and bind parameters
        //changed to more unpredictable set vars
        $stmt = $conn->prepare("INSERT INTO huney(name,password,address,number,comment,email) 
        VALUES (:namead, :passdaword, :daaddress,:numberfe,:avcomment,:ghovciopemail)");
        $stmt->bindParam(':namead', $namead);
        $stmt->bindParam(':passdaword', $passda);
        $stmt->bindParam(':daaddress', $daaddress);
        $stmt->bindParam(':numberfe',$numberfe);
       # $stmt->bindParam(':orders',"med");
        $stmt->bindParam(':avcomment',$avcomment);
        $stmt->bindParam(':ghovciopemail',$ghovciopemail);
        #FEAR THE ULTIMATE DOUBLE ENCRYPTION
        function secure($x){
                return trim(htmlspecialchars(htmlentities($x)));
        };
        $namead=secure($_POST['name']);
        $passda=secure($_POST['password']);
        $daaddress=secure($_POST['address']);
        $ghovciopemail=secure($_POST['email']);
        $numberfe=secure($_POST['number']);
        $avcomment=secure($_POST['comment']);
        $stmt->execute();
            } catch(PDOException $e) {
        echo "Error: " . $e->getMessage();
      }
      $conn = null;          
 /*               $name=$_POST['name'];
                $pass=$_POST['password'];
                $address=$_POST['address'];
                $email=$_POST['email'];
                $number=$_POST['number'];
                $comment=$_POST['comment'];
                $query="INSERT INTO huney(name,password,address,number,orders,comment,email) VALUES('$name','$pass','$address','$number',NULL,'$comment',$email)";
        $run=mysqli_query($conn,$query) or die(mysqli_error());*/
        ?><script>location.href="login.php"</script><?php    
}
else{
  ?><script>location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"</script><?php              
};
};
/*        if($run){
                echo "submited";
        }
        else{
                echo "not";
                return;
        }
        }
        else{
                echo "required";
                return;
        }
}*/

?>
