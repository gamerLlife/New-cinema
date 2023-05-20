function successLoginIn(button){
    // Perform login logic here
    window.location.href = "index.html";
    // Display success alert
    var alert = document.createElement("div");
    alert.className = "alert alert-success";
    alert.innerHTML = "Success! You are now logged in.";
    
    var container = document.getElementById("container");
    container.appendChild(alert);
}

function goToSignUpPage() {
    window.location.href = "register.html";
}