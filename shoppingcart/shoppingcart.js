let product1 = document.getElementById("p1");
product1.addEventListener("change", subtotal);

let product2 = document.getElementById("p2");
product2.addEventListener("change", subtotal);

let product3 = document.getElementById("p3");
product3.addEventListener("change", subtotal);

let standard = document.getElementById("standard");
standard.addEventListener("change", total);

let expedited = document.getElementById("expedited");
expedited.addEventListener("change", total);

let addtocart1 = document.getElementById("addcart1");
addtocart1.addEventListener("click", total);

let addtocart2 = document.getElementById("addcart2");
addtocart2.addEventListener("click", total);

let addtocart3 = document.getElementById("addcart3");
addtocart3.addEventListener("click", total);



function hover(element, imagename) {
  element.setAttribute('src', imagename);
}

function unhover(element, imagename) {
  element.setAttribute('src', imagename);
}


function subtotal() {
  
  let productid = this.id;

  price = document.getElementById(productid+"price").value;
  quantity = document.getElementById(productid).value;
  writesubtotal = price*quantity;
  document.getElementById(productid + "hidden").value = quantity;
  document.getElementById(productid+"subtotal").value = writesubtotal;

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

  if (expedited.checked) {
    writesum += 5;
  }

  document.getElementById("total").innerText = writesum;
  $("#totalhidden").val(writesum);

}



shippingform.addEventListener("submit", function(event)
  {
   result = validate();
   if (result == false) {
    event.preventDefault();
    return false;
   }
  document.forms[0].submit;
  });
function validate(event) {
   let error="";

   cardname = document.getElementById("ccname");
   cardname.style.background = "white";
   if (cardname.value == "" || cardname.value == null) {
     alert("Please enter a valid card name.");
     cardname.focus();
     cardname.select();
     cardname.style.background = "#FA8072";
    error="yes";

     return false;
   }

   let ccnamepattern = /^[A-Za-z][A-Za-z]*$/; 
   //this pattern comes from google
   if (cardname.value.length > 0 && !ccnamepattern.test(cardname.value)) {
    alert("Please enter a valid card name.");
    cardname.focus();
    cardname.select();
    cardname.style.background = "#FA8072";
     error="yes";
     return false;
    }

   
  cardnumber = document.getElementById("ccnumber");
  cardnumber.style.background = "white";
   if (cardnumber.value == "" || cardnumber.value == null) {
     alert("Please enter a valid card number.");
     cardnumber.focus();
     cardnumber.select();
     cardnumber.style.background = "#FA8072";
     error="yes";
     return false;
   }

  if (cardnumber.value.length != 16) {
    alert("Please enter a valid card number.");
    cardnumber.focus();
    cardnumber.select();
    cardnumber.style.background = "#FA8072"
    error="yes";
    return false;
  }

  customername = document.getElementById("name");
   customername.style.background = "white";
   if (customername.value == "" || customername.value == null) {
     alert("Please enter a valid name.");
    customername.focus();
    customername.select();
    customername.style.background = "#FA8072";
    error="yes";

     return false;
   }

   let namepattern = /^[A-Za-z][A-Za-z]*$/; 
   //this pattern comes from google
   if (customername.value.length > 0 && !namepattern.test(customername.value)) {
    alert("Please enter a valid name.");
    customername.focus();
    customername.select();
    customername.style.background = "#FA8072";
     error="yes";
     return false;
    }

   customeremail = document.getElementById("email");
   customeremail.style.background = "white";
   if (customeremail.value == "" || customeremail.value == null) {
    alert("Please enter a valid email address.");
    customeremail.focus();
    customeremail.select();
    customeremail.style.background = "#FA8072";
    error="yes";
    return false;

  }
  let emailpattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  //this pattern comes from google
  if (customeremail.value.length >0 && !emailpattern.test(customeremail.value)) {
    alert("Please enter a valid email address.");
    customeremail.focus();
    customeremail.select();
    customeremail.style.background = "#FA8072"
    error="yes"
    return false;
  }

  phonenumber = document.getElementById("phone");
  phonenumber.style.background = "white";
   if (phonenumber.value == "" || phonenumber.value == null) {
     alert("Please enter a valid phone number.");
     phonenumber.focus();
     phonenumber.select();
     phonenumber.style.background = "#FA8072";
     error="yes";
     return false;
   }

   let phonepattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
   //this pattern comes from google
   if (phonenumber.value.length >0 && !phonepattern.test(phonenumber.value)) {
    alert("Please enter a valid phone number.");
    phonenumber.focus();
    phonenumber.select();
    phonenumber.style.background = "#FA8072"
    error="yes";
    return false;
  }

  address = document.getElementById("address");
  address.style.background = "white";
   if (address.value == "" || address.value == null) {
     alert("Please enter a valid address.");
    address.focus();
    address.select();
    address.style.background = "#FA8072";
    error="yes";
    return false;
   }

  zipcode = document.getElementById("zipcode");
  zipcode.style.background = "white";
   if (zipcode.value == "" || zipcode.value == null) {
     alert("Please enter a valid zip code.");
     zipcode.focus();
     zipcode.select();
     zipcode.style.background = "#FA8072";
      error="yes";
      return false;
   }

  if (zipcode.value.length != 5) {
    alert("Please enter a valid zip code.");
    zipcode.focus();
    zipcode.select();
    zipcode.style.background = "#FA8072";
    error="yes"
    return false;

  }


  return true;

}


