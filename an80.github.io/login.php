<!DOCTYPE html>
<!--
<?php
include("loginserv.php"); // Include loginserv for checking email and password
?>
-->
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Login</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="Huney_register.css">
    </head>
    <body>
        <form method="POST" action="huney_login.php" id="login">
            <fieldset>
             <h1><legend>Login</legend></h1>
             <div class="box_1">
                <label id="e_lab">E-Mail</label>
                <input type="email" name="email" id="e_in" id="e_log"required></input>
              </div>
               </br>
               <div class="box_1">
               <label id="pass_lab">Password</label>
               <input type="password" name="password" required id="pass_in" id="pass_log"></input>
             </div>
               </br>
               <div class="box_1">
               <button type="submit" name="submit" id="button">Login</button>
             </div>
            </fieldset>
               </form>
               <span><?php echo $error; ?></span>
    </body>
</html>
