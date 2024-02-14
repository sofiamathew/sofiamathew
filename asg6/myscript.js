$(document).ready(function(){
  
  $("#changestyle").click(function() {

    $("#special").css("color", "rgba(144,153,134)");
    $("#highlight").css("background-color", "#FAE29C");

   let ps =  $("p");
   for (i=0; i<ps.length; i++) {
    $(ps[i]).addClass("cool");
   }

   for (i=0; i<ps.length; i++) {
    alert($(ps[i]).html());
   }

  });

$("#hide").click(function() {

  $("#asg6pt2").hide();

});

$("#show").click(function() {

  $("#asg6pt2").show();

});

$("#fadeout").click(function() {

  $("#asg6pt2").fadeOut(2000);

});

$("#animate").click(function() {
  $("#asg6pt3").animate({left: '300px', opacity: '0.5'}, "slow");
  $("#asg6pt3").animate({width: '250px', opacity: '0.6'}, "slow");
  $("#asg6pt3").animate({height: '250px', opacity: '0.7'}, "slow");
  $("#asg6pt3").animate({width: '150px', opacity: '0.8'}, "slow");
  $("#asg6pt3").animate({height: '150px', opacity: '0.9'}, "slow");
  $("#asg6pt3").animate({left: '50px', opacity: '1'}, "slow");
  
});

$("#username").change(function() {
  let uname = $("#username").val();
    console.log("uname",uname);
  if ($("#username").val() == "") {
    alert("Please enter a valid username");
    $("#username").focus();
    $("#username").css("background-color", "#FAE29C");
    return;
    }
    if ($("#password").val() == "") {
      alert("Please enter a valid password");
      $("#password").focus();
      $("#password").css("background-color", "#FAE29C");
      return;
    }
    $("#submission").html("username: " + $(username).val() + "<br>password: " + $(password).val())    
});


$("#password").change(function() {
  let uname = $("#username").val();
    console.log("uname",uname);
  if ($("#username").val() == "") {
    alert("Please enter a valid username");
    $("#username").focus();
    $("#username").css("background-color", "#FAE29C");
    return;
    }
    if ($("#password").val() == "") {
      alert("Please enter a valid password");
      $("#password").focus();
      $("#password").css("background-color", "#FAE29C");
      return;
    }
  $("#submission").html("<br>username: " + $(username).val() + "<br>password: " + $(password).val()) 
       
});


  });