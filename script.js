// Wait for the DOM to fully load before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Find the button element
    const button = document.querySelector("button");

    // Check if the button exists before attaching the event listener
    if (button) {
        // Attach event listener to the button
        button.addEventListener("click", startExploring);
    }
});

// Function for handling the button click
function startExploring() {
    alert("Welcome to the Esoteric Chaos Blogsite! Start your journey into the unknown!");
}
