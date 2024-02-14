<?php
ini_set('display_errors', true);
ini_set('display_startup_errors', true);
error_reporting(E_ALL);
?>

<!DOCTYPE>
<html>

  <head>
		<title>
			NYC Merch
		</title>
		<meta name="description" content="This is a page where you can buy NYC merch.">
		<meta name="keywords" content="web programming, merch, nyc, projects">
		<meta name="author" content="Sofia Mathew">

		<link rel="stylesheet" type="text/css" href="shoppingcart.css">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">
	

	</head>

	<body>

			<header class="headerhome">
				<h2 class="horizontal">Thank you for your order!</h2>
			</header>
  <div class="horizontal">
    <div class="receipt">
      <h3 class="horizontal">Here is your receipt: </h3>

  <?php
  $productnames = array("New Yorker’s New York Match Box", "New Yorker’s New York Poster", "New Yorker’s New York Mug");
  $productprices = array(5, 15, 10);
  $productquantity = array(0, 0, 0);
  $productquantity[0] = $_GET['q1'];
  $productquantity[1] = $_GET['q2'];
  $productquantity[2] = $_GET['q3'];
  $name = $_GET['name'];
  $email = $_GET['email'];
  $phone = $_GET['phone'];
  $address = $_GET['address'];
  $zipcode = $_GET['zipcode'];
  $shipping = $_GET['shippingmethod'];
  $payment = $_GET['paymentmethod'];
  $cardname = $_GET['ccname'];
  $cardnumber = $_GET['ccnumber'];
  $lastfour = substr($cardnumber, -4);
  $total = $_GET['total'];
  $count = count($productquantity);
  for ($i = 0; $i <$count; $i++ )
  {
  if ($productquantity[$i] >0)
    print("<p>$productquantity[$i]  $productnames[$i]</p>");
    
  }


  print("<p>your total: $$total</p>");
  print("<p>name: $name</p>");
  print("<p>email: $email</p>");
  print("<p>phone number: $phone</p>");
  print("<p>address: $address</p>");
  print("<p>zip code: $zipcode</p>");
  print("<p>shipping method: $shipping</p>");
  print("<p>card name: $cardname</p>");
  print("<p>card number: xxxxxxxxxxxx$lastfour</p>");
  $file = fopen("clients.txt","a");
  fwrite($file, "beginning of transaction".PHP_EOL);
  fwrite($file, $total);
  fwrite($file, "|");
  fwrite($file, $name);
  fwrite($file, "|");
  fwrite($file, $email);
  fwrite($file, "|");
  fwrite($file, $phone);
  fwrite($file, "|");
  fwrite($file, $address);
  fwrite($file, "|");
  fwrite($file, $zipcode);
  fwrite($file, "|");
  fwrite($file, $shipping);
  fwrite($file, "|");
  fwrite($file, $cardname);
  fwrite($file, "|");
  fwrite($file, $cardnumber.PHP_EOL);
  fwrite($file, "end of transaction".PHP_EOL);
  
  fclose($file);
  ?>

</div>
</div>
  </div>




	</body>
</html>