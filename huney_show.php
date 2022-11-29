<?php
        $sql_view="SELECT * FROM customers;";
        $result=mysqli_query($conn,$sql_view);
        $resultCheck=mysqli_num_rows($result);
        if($resultCheck>0){
            while($row = mysqli_fetch_assoc($result)){
                echo "<li>".$row["address"]."</li>";
            };
        };
        ?>