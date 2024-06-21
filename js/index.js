function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var feedback = document.getElementById("feedback").value;
  
    var message = "Name: " + name + "\n";
    message += "Email: " + email + "\n";
    message += "Phone: " + phone + "\n\n";
    message += "Feedback: " + feedback;
  
    var mailToLink = "mailto:kumarankit11458@gmail.com?subject=Feedback&body=" + encodeURIComponent(message);
  
    window.location.href = mailToLink;
  }
  