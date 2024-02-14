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

			<header class="headerhome">
				<h2>sofia's bakeshop</h2>
			</header>
  <div class="horizontal">
    <div class="receipt">
      <h3>here is you're receipt</h3>


  <?php
  $name = $_GET['name'];
  $email = $_GET['email'];
  $products = $_GET['products'];
  $itemnum = $_GET['itemnum'];
  $total = 0;
  if ($products == "cake") {
    $total = 20 * $itemnum;
  }
  else if ($products == "pie") {
    $total = 15 * $itemnum;
  }

  print("<p>name: $name</p>");
  print("<p>email: $email</p>");
  print("<p>products: $products</p>");
  print("<p>number of items: $itemnum</p>");
  print("<p>your total: $$total</p>");
  ?>

</div>
  </div>




	</body>
</html>