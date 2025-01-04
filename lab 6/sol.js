
document.getElementById("greetingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from reloading the page

    // Get the value of the input field
    var name = document.getElementById("name").value;

    // Check if the name is not empty
    if (name.trim() !== "") {
      // Display a personalized greeting
      document.getElementById("greeting").textContent = "Hello, " + name + "! Welcome to our website.";
    } else {
      // If no name is entered, show an error message
      document.getElementById("greeting").textContent = "Please enter your name!";
    }
  });

  //forloop to display first ten natural numbers
  for (let i = 1; i <= 10; i++) {
  console.log(i); 
  }