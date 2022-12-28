function validate()
{
  var username=document.getElementById("username").value;
  var password=document.getElementById("password").value;
  if(username=="admin" && password=="Venu@2001")
  {
    alert("Login succesful");
    return false;
  }
  
  else
  {
    alert("Login faild");
  }
}
function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}



var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");


function myFunction1() {
  document.getElementById("message").style.display = "block";
}


function myFunction2() {
  document.getElementById("message").style.display = "none";
}




