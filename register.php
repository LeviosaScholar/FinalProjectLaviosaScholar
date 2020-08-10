//create sql table first for exmple
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
//

<?php
session_start();


$username = "";
$email    = "";
$errors = array();

$db = mysqli_connect('localhost', 'root', '', 'registration');

if (isset($_POST['reg_user'])) {

  $firstname = mysqli_real_escape_string($db, $_POST['Firstname']);
    $lastname = mysqli_real_escape_string($db, $_POST['Lastname']);
  $email = mysqli_real_escape_string($db, $_POST['email']);
  $password_1 = mysqli_real_escape_string($db, $_POST['password_1']);
  $password_2 = mysqli_real_escape_string($db, $_POST['password_2']);



  if (empty($Fullname)) { array_push($errors, "Firstname is required"); }
  if (empty($lastname)) { array_push($errors, "lastname is required"); }
  if (empty($email)) { array_push($errors, "Email is required"); }
  if (empty($password_1)) { array_push($errors, "Password is required"); }
  if ($password_1 != $password_2) {
	array_push($errors, "The two passwords do not match");
  else array_push($errors, "The two passwords matches");
  }
    if ($user['email'] === $email) {
      array_push($errors, "email already exists");
    }

  	$query = "INSERT INTO users (Firstname,Lastname, email, password)
  			  VALUES('$firstname', '$lastname', '$email', '$password')";
  	mysqli_query($db, $query);
  	$_SESSION['Firstname'] = $firstname;
    $_SESSION['Lastname'] = $lastname;
  	$_SESSION['success'] = "You have registered;
