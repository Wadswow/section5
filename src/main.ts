// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let counter = 0;

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>"CMPM 121 Project"</h1>
    <p>Counter: <span id="counter">0</span></p>
    <button id="increment">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;

  // Get the increment button element from the document
  const buttonIncrement = document.getElementById("increment");
  // Get the decrement button element from the document
  const buttonDecrement = document.getElementById("dec");
  // Get the reset button element from the document
  const buttonReset = document.getElementById("reset");
  // Get the counter span element from the document
  const counterElement = document.getElementById("counter");

  // Check if any element is missing, then exit the function
  if (!buttonIncrement || !buttonDecrement || !buttonReset || !counterElement) {
    return;
  }

  function increment() {
    // Update the counter display
    counterElement!.innerHTML = `${counter}`;
    // Update the document title
    document.title = "Clicked " + counter;
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
  }

  // Add click event to the increment button
  buttonIncrement.addEventListener("click", () => {
    // Increase the counter by 1
    counter++;
    increment();
  });

  // Add click event to the decrement button
  buttonDecrement.addEventListener("click", () => {
    // Decrease the counter by 1
    counter--;
    increment();
  });

  // Add click event to the reset button
  buttonReset.addEventListener("click", () => {
    // Reset the counter to 0
    counter = 0;
    increment();
  });
}

function start() {
  // Call setup to initialize the UI
  setup();
}
// Start the counter app
start();
