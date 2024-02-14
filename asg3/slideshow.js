
let prizes ;
let prizesimage;

function randArray() {
  prizes = ["dress", "shoes", "makeup", "jewelry", "purse"];
  prizesimage = ["dress.jpg", "shoes.jpg", "makeup.jpg", "jewelry.jpg", "purse.jpg"];
  
  let output = "";

  for (let i = 0; i < prizes.length; i++) {
    output += prizes[i] + "<br>";
  }

  document.getElementById ("prizes").innerHTML = output;

}

function selectprize() {
  let choice = Math.floor(Math.random() * prizes.length);
  let result = "you've won: " + prizes[choice];

  document.open();
  document.write("<!DOCTYPE html><html><head><title>Prize</title><link rel='stylesheet' href='../styles.css' type='text/css'></head><body>");
  
  document.write("<h2 class=header>winning a prize</h2>");
  
  document.write("<div class='slideshow'>" + result + "</div>");
  
  document.write("<p class='slideshow'><img src='" + prizesimage[choice] + "' >");
  
  document.write("<p><a href='index.html'> go back to main page </a>");
  
  document.write("</body></html>");
  
}


function randImage() {
  let images = ["atlanta.jpg", "newyork.jpg", "london.jpg", "paris.jpg", "amsterdam.jpg"];
  let result2 = Math.floor(Math.random() * images.length);

  document.getElementById ("randomimages").src = images[result2];

}


let intervalid;
var imgarray;
var startposition = 0;

function start() {
  
  imgarray = ["atlanta.jpg", "newyork.jpg", "london.jpg", "paris.jpg"];

  intervalid = setInterval(function() {
    document.getElementById ("img1").src = imgarray[startposition];
    startposition ++;
    if (startposition >= imgarray.length){
      startposition = 0;
    }
  }, 2000);
}

function stop() {
  clearInterval(intervalid);
}



