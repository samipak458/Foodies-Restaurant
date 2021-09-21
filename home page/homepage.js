
function newsletter(){
    var email = document.getElementById('mail').value;
  
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    alert("Subscribed Successfully!");
  }
  else{
    alert("You have entered an invalid email address!")
    return (false)
  }
}

function phonum() {
  var phone = document.getElementById("number");
  if(phone.value.length !== 11) {
      alert("Phone number is not valid");
  }
}