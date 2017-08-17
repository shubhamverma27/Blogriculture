<?php
header("Access-Control-Allow-Origin: *");
$servername = "localhost";
$username = "root";
$password = "1234";
$dbname = "farmer";
$fname=$_POST["fname"];
$lname=$_POST["lname"];
$email=$_POST["email"];
$fid=$_POST["fid"];
$faddr=$_POST["faddr"];
$croptype=$_POST["croptype"];
$cropyear=$_POST["cropyear"];
$area=$_POST["area"];
$coverage=$_POST["coverage"];
$premium=$_POST["premium"];
$balance=$_POST["rembal"];
echo $fid, $fname, $lname, $email, $croptype, $cropyear, $area, $faddr,$coverage,$premium, $balance;
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql ="INSERT INTO farmer(fid,fname,lname,email,croptype,cropyear,area,faddr,coverage,premium,balance) VALUES ('$fid', '$fname', '$lname', '$email', '$croptype', '$cropyear', '$area', '$faddr', '$coverage','$premium', '$balance')";
if ($conn->query($sql) === TRUE) {
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>
