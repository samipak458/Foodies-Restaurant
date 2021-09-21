function data() {
    var username = document.getElementById("username");        
    var address = document.getElementById("address");
    
    var userOP = document.getElementById("userOP");           
    var numberOP = document.getElementById("numberOP");
    var addressOP = document.getElementById("addressOP");
   
    userOP.innerHTML = username.value;      
    numberOP.innerHTML = number.value;
    addressOP.innerHTML = address.value;
    document.getElementsByClassName("form")[0].style.display = "none";       
    document.getElementById("reciept").style.display = "block"; 
    
    if (username.value == "" ||  number.value == "" || address.value == "" || email.value == "")
    {
        alert("Please enter some values");
    }

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