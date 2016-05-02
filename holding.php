<?php 

if(isset($_POST['profileid']))
{
    $uid = $_POST['profileid'];

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

$sql = "Update Submissions SET Likes = Likes + 1 where id = $uid";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
     while($row = $result->fetch_assoc()) {
         echo $row["likes"];
     }
} else {
     echo "0 results";
}
?>