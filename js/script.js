function init() {
  // Get the input, button, and headline elements
  const input = document.getElementById("entryinput");
  const button = document.getElementById("entrybutton");
  const headline = document.querySelector("h2"); // assuming there's only one h2 below the button

  // Add click event to the button
  button.addEventListener("click", function () {
    const value = input.value;

    // Show alert with your name
    alert("Regina: " + value);

    // Update the headline text
    headline.textContent = value;
  });
}

window.addEventListener('load', init);