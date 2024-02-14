<?php
ini_set('display_errors', true);
ini_set('display_startup_errors', true);
error_reporting(E_ALL);
?>

<HTML>
<head>
<title>Mad Libs</title>
  <link href="../styles.css" type="text/css" rel="stylesheet" />
	<link href="madlibs.css" type="text/css" rel="stylesheet" />
</head>
<body>    

<h2> Your Mad Lib: </h2>

<p>

  <?php
  $adj1 = $_GET['adj1'];
  $adj2 = $_GET['adj2'];
  $noun1 = $_GET['noun1'];
  $verb1 = $_GET['verb1'];
  $noun2 = $_GET['noun2'];
  $num = $_GET['num'];
  $verb2 = $_GET['verb2'];
  $noun3 = $_GET['noun3'];
  print("The $adj1 $noun1 $verb1 the $adj2 house. There she saw a $noun2 $verb2 with $num $noun3.")
  ?>

</p>


</body>
</html>