function send(){
    var person = document.getElementById('name').value;
    var email = document.getElementById('mail').value;
    var phone = document.getElementById('number').value;
    var message = document.getElementById('text').value;
    if(person==''){
        alert("Please enter your name!");
    }
    else if(email==''){
        alert("Please enter your email address!");
    }
    else if(phone==''){
        alert("Please enter your phone number!");
    }
    else if(message==''){
        alert("Please write your querry.");
    }    
    else{
        alert(`Thank you! ${person} for contacting us.`);
    }
}