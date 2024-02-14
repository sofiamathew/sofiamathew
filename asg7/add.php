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

<h2> Your Answer: </h2>

<p>

  <?php
  $num1 = floatval($_GET['num1']);
  $num2 = floatval($_GET['num2']);
  $operator = $_GET['operator'];
  $answer = 0;
  if ($operator == "+") {
    $answer = $num1 + $num2;
  }
  else if ($operator == "-") {
    $answer = $num1 - $num2;
  }
  else if ($operator == "*") {
    $answer = $num1 * $num2;
  }
  else if ($operator == "/") {
    $answer = $num1 / $num2;
  }
  else {
    print("error, please try again");
  }

  print("$num1 $operator $num2 = $answer")
  ?>

</p>


</body>
</html>