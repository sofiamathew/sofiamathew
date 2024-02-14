<?php
ini_set('display_errors', true);
ini_set('display_startup_errors', true);
error_reporting(E_ALL);
?>

<!DOCTYPE>
<html>

	<head>
		<title>
			Sofia Mathew's Web Programming and Development Website
		</title>
		<meta name="description" content="This is a responsive website for Sofia Mathew's Web Programming class">
		<meta name="keywords" content="web programming, assignments, portfolio, projects, home base, homepage">
		<meta name="author" content="Sofia Mathew">

		<link rel="stylesheet" type="text/css" href="../styles.css">
    <link rel="stylesheet" type="text/css" href="madlibs.css">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital@0;1&display=swap" rel="stylesheet">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">
		
	</head>

	<body>

				<h2>quiz results</h2>
  <div class="horizontal">
    <div class="results">


  <?php
  $q1answer = $_GET['hottestplanet'];
  $q2answer = $_GET['daylength'];
  $q3answer = $_GET['backwards'];
  $total = 0;
  $correctans = array("venus", "twice", "venus");
  if ($q1answer == $correctans[0]) {
    $total += 1;
  }
  if ($q2answer == $correctans[1]) {
    $total += 1;
  }
  if ($q3answer == $correctans[2]) {
    $total += 1;
  }
  $score = round(($total/3)*100);
  print("<h3>answers</h3>");

  print("<p>1. What is the hottest planet in our solar system?</p>");
  print("<p>You answered: $q1answer</p>");
  print("<p>Correct answer: $correctans[0]</p><br>"); 

  print("<p>2. A day on Mercury is...</p>");
  print("<p>You answered: $q2answer</p>");
  print("<p>Correct answer: $correctans[1]</p><br>");

  print("<p>3. Which planet spins backwards?</p>");
  print("<p>You answered: $q3answer</p>");
  print("<p>Correct answer: $correctans[2]</p><br>");

  print("<p>Your score: $score%</p>");
  ?>

</div>
  </div>




	</body>
</html>