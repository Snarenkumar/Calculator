// Get all the buttons
const buttons = document.querySelectorAll('.num');
const entry = document.querySelector('input');













// Function to perform the calculation
function calculate() {
    try {
        entry.value = eval(entry.value); // Using eval() for simplicity (not recommended for production due to security risks)
    } catch (error) {
        entry.value = 'Error';
    }
}

// Loop through each button and attach a click event
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.value === 'AC') {
            entry.value = ''; // Clear the input
        } else if (button.value === '=') {
            calculate(); // Calculate when '=' is pressed
        } else {
            entry.value += button.value; // Append the button value to the input
        }
    });
});
