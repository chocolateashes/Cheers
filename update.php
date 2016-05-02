<?php 

if(isset($_POST['name']))
{
    $name = $_POST['name'];

}
if(isset($_POST['text']))
{
    $text = $_POST['text'];

}
$servername = "localhost";
$username = "root";
$password = "mysql";
$dbname = "cheers";

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
     die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT id FROM Profile where username='$name'";
$sql1 = "INSERT INTO `profile`(`Username`) VALUES ('$name')";
$result1 = $conn->query($sql1);
$result = $conn->query($sql);
if($result->num_rows > 0) {
     // output data of each row
     while($row = $result->fetch_assoc()) {
         echo $row["text"];
         echo "Submitted By ".$row["id"];
         $needid = $row["id"];
         $submissionid = $row["id"];
         
     }
} else {
     echo "0 results";
}
$sql2 = "INSERT INTO `submissions`(`profileid`, `text`) VALUES ($needid,'$text')";
$result2 = $conn->query($sql2);
?>