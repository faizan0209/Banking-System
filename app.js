// login-page
function submitForm(event) {
  event.preventDefault(); // Prevent default form submission
  var emailInput = document.getElementById('email').value.trim(); // Retrieve value and remove leading/trailing whitespace
  var passwordInput = document.getElementById('password').value.trim(); // Retrieve value and remove leading/trailing whitespace
  
  // Retrieve stored email and password
  var storedEmail = localStorage.getItem("email");
  var storedPassword = localStorage.getItem("password");

  console.log("Stored email:", storedEmail);
  console.log("Stored password:", storedPassword);
  console.log("Input email:", emailInput);
  console.log("Input password:", passwordInput);

  // Check if stored email and password exist
  if (storedEmail === null || storedPassword === null) {
    alert("No account registered. Please register first.");
    return;
  }

  // Check if input values are empty
  if (emailInput === "" || passwordInput === "") {
    alert("Please enter both email and password.");
    return;
  }

  // Compare input values with stored email and password
  if (emailInput === storedEmail && passwordInput === storedPassword) {
    window.location.replace("Dashboard.html");
    alert("Login Successful");
  } else {
    alert("Invalid email or password!");
  }
}

















// document.getElementById('submit').addEventListener('click', function(event) {
//   submitForm(event);
// });
// function submitForm(event) {
//   event.preventDefault(); // Add this line to prevent default form submission
//   var emailInput = document.getElementById('email');
//   var passwordInput = document.getElementById('password');
//   var resultDiv = document.getElementById('result');
//   var email=localStorage.getItem("email");
//   var password=localStorage.getItem("password");
//   if(emailInput===email && passwordInput===password){
//     window.location.replace ("Dashboard.html");
//     alert("login Successfull");
//   }
//   else{
//     alert("invalid email or password!");
//   }

// }






// var email1 = emailInput.value;
//   var password1 = passwordInput.value;
// var email1 = emailInput.value;
// var password1 = passwordInput.value;
// if (email1 == "faizansajid42@yahoo.com" && password1 == "FA020666!") {
//   // Use window.location.replace() to navigate to the next page
//   alert("login Successfull");
//   window.location.replace("./Dashboard.html");
// } else if (email1 == "" && password1 == "") {
//   resultDiv.innerHTML = 'Please fill out all fields!';
// } else {
//   resultDiv.innerHTML = "Invalid email or password!";
// }
// }
// // register page
