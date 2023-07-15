var fname = document.getElementById("first_name");
var lname = document.getElementById("last_name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var content = document.getElementById("message");


function sendEmail(){

    Email.send({
        SecureToken : "cef94416-abb0-44c9-b0a6-6fd24e04dd8b",
        To : 'pasanmahindapalaofficial@gmail.com',
        From : "pasanmahindapalaofficial@gmail.com",
        Subject : "Message from " + fname.value+ " " + lname.value,
        Body : "First name: " + fname.value + 
        "<br> Last name: "+ lname.value +
        "<br>Email: " + email.value +
        "<br>Phone: " + phone.value +
        "<br> Message: " + content.value ,
    }).then(
      message => alert("Thank you for Contacting Us")
    );


}