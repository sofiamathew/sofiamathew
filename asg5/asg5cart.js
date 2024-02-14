
let product1 = document.getElementById("p1");
product1.addEventListener("change", subtotal);

let product2 = document.getElementById("p2");
product2.addEventListener("change", subtotal);

let delivery = document.getElementById("delivery");
delivery.addEventListener("change", total);

let pickup = document.getElementById("pickup");
pickup.addEventListener("change", total);

// customername = document.getElementById("name");
// customername.addEventListener("focus", function (){
//   customername.style.background = "white";
// });

let shippingform = document.forms[0];

function subtotal() {
  
  let productid = this.id;

  price = document.getElementById(productid+"price").value;
  quantity = document.getElementById(productid).value;
  writesubtotal = price*quantity;

  document.getElementById(productid+"subtotal").value = writesubtotal;
  total();
}

function total() {

  let products = document.getElementsByClassName("quantity");
  writesum = 0.0;
  
  for (i=0; i<products.length; i++) {
    let product = products[i];
    let productid = product.id;

    price = document.getElementById(productid+"price").value;
    quantity = document.getElementById(productid).value;
    writesum += price*quantity;
  }

  if (delivery.checked) {
    writesum += 10;
  }

  document.getElementById("total").innerText = writesum;

}

shippingform.addEventListener("submit", function(event)
  {
	 event.preventDefault();
   receipt();
  });
function receipt() {
   let error="";
   customername = document.getElementById("name");
   customername.style.background = "white";
   if (customername.value == "" || customername.value == null) {
     alert("Please enter a valid name.");
    customername.focus();
    customername.select();
    customername.style.background = "#FA8072";
    error="yes";
    return;
   }

   let namepattern = /^[A-Za-z][A-Za-z]*$/; 
   //this pattern comes from google
   if (customername.value.length > 0 && !namepattern.test(customername.value)) {
    alert("Please enter a valid name.");
    customername.focus();
    customername.select();
    customername.style.background = "#FA8072";
     error="yes";
     return;
    }

   customeremail = document.getElementById("email");
   customeremail.style.background = "white";
   if (customeremail.value == "" || customeremail.value == null) {
    alert("Please enter a valid email address.");
    customeremail.focus();
    customeremail.select();
    customeremail.style.background = "#FA8072";
    error="yes";
    return;

  }
  let emailpattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  //this pattern comes from google
  if (customeremail.value.length >0 && !emailpattern.test(customeremail.value)) {
    alert("Please enter a valid email address.");
    customeremail.focus();
    customeremail.select();
    customeremail.style.background = "#FA8072"
    error="yes"
    return;
  }

  address = document.getElementById("address");
  address.style.background = "white";
   if (address.value == "" || address.value == null) {
     alert("Please enter a valid address.");
    address.focus();
    address.select();
    address.style.background = "#FA8072";
    error="yes";
    return;
   }

  zipcode = document.getElementById("zipcode");
  zipcode.style.background = "white";
   if (zipcode.value == "" || zipcode.value == null) {
     alert("Please enter a valid zip code.");
     zipcode.focus();
     zipcode.select();
     zipcode.style.background = "#FA8072";
      error="yes";
      return;
   }

  if (zipcode.value.length != 5) {
    alert("Please enter a valid zip code.");
    zipcode.focus();
    zipcode.select();
    zipcode.style.background = "#FA8072";
    error="yes"
    return;

  }

  cardnumber = document.getElementById("ccnumber");
  cardnumber.style.background = "white";
   if (cardnumber.value == "" || cardnumber.value == null) {
     alert("Please enter a valid card number.");
     cardnumber.focus();
     cardnumber.select();
     cardnumber.style.background = "#FA8072";
     error="yes";
     return;
   }

  if (cardnumber.value.length != 16) {
    alert("Please enter a valid card number.");
    cardnumber.focus();
    cardnumber.select();
    cardnumber.style.background = "#FA8072"
    error="yes";
    return;
  }

  if (error == ""){
    text1="<html>"
    text1 += '<head> <link rel="stylesheet" type="text/css" href="../styles.css"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital@0;1&display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet"></head>';
    text1 += "<body><h2> Your cookies are almost ready, here is your receipt: </h2>";
    text1 += '<div class="center1"><div class="center receipt">';
    text1 += "<p>name: " + document.forms[0]["name"].value + "</p>"
    text1 += "<p>address: " + document.forms[0]["address"].value + "</p>"
    text1 += "<p>zip code: " + document.forms[0]["zipcode"].value + "</p>"
    text1 += "<p>email: " + document.forms[0]["email"].value + "</p>"
    amex = document.forms[0]["amex"];
    if (amex.checked) {
      text1 += "<p>payment method: " + document.forms[0]["amex"].value + "</p>"
    }
    visa = document.forms[0]["visa"];
    if (visa.checked) {
      text1 += "<p>payment method: " + document.forms[0]["visa"].value + "</p>"
    }
    ccnumber = document.forms[0]["ccnumber"].value;
    text1 += "xxxxxxxxxxxx" + ccnumber.substr(ccnumber.length-4);
    let products = document.getElementsByClassName("quantity");
    for (i=0; i<products.length; i++) {
      let product = products[i];
      let productid = product.id;
  
      price = document.getElementById(productid+"price").value;
      quantity = document.getElementById(productid).value;
      if (quantity > 0) {
        text1 += "<p>";
        text1 += document.getElementById(productid+"label").innerHTML;
        text1 += ": $";
        text1 += document.getElementById(productid+"subtotal").value;
        text1 += "</p>";
      }

    }
    pickup = document.forms[0]["pickup"];
    if (pickup.checked) {
      text1 += "<p>shipping method: " + document.forms[0]["pickup"].value + " - $0" + "</p>"
    }
    delivery = document.forms[0]["delivery"];
    if (delivery.checked) {
      text1 += "<p>shipping method: " + document.forms[0]["delivery"].value + " - $10" + "</p>"
    }
    text1 += "<p> total: $";
    text1 += document.getElementById("total").innerText;
    text1 += "</p>" + "</div></div></body></html>";
    document.open();
    document.write(text1);

  }

}
