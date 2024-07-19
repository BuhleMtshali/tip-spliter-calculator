

---

# Tip Calculator

## Overview

The Tip Calculator is a simple web application designed to help users calculate the tip amount and total bill per person based on the bill amount and the selected tip percentage. It provides options for predefined tip percentages as well as a custom tip input. The application also supports resetting all input fields to their default values.

## Features

- **Bill Amount Input:** Enter the total bill amount.
- **Tip Percentage Selection:** Choose from preset tip percentages (5%, 10%, 15%, 25%, 50%) or input a custom percentage.
- **Number of People Input:** Specify the number of people to split the bill.
- **Tip Amount Calculation:** View the calculated tip amount per person.
- **Total Amount Calculation:** View the total amount per person, including the tip.
- **Reset Button:** Reset all inputs and results to their default states.

## Usage

1. **Enter the Bill Amount:**
   - Input the total bill amount in the "Bill" field.
   
2. **Select a Tip Percentage:**
   - Click one of the preset tip percentage buttons (5%, 10%, 15%, 25%, 50%) or enter a custom percentage in the "Other" field and press Enter.
   
3. **Specify Number of People:**
   - Input the number of people in the "Number of People" field.
   
4. **View Results:**
   - The application will display the tip amount per person and the total amount per person in the right container.

5. **Reset the Form:**
   - Click the "RESET" button to clear all input fields and reset the results.

## Files

- `index.html` - The HTML structure of the tip calculator.
- `styles.css` - The CSS styles for the tip calculator.
- `app.js` - The JavaScript code for the tip calculation logic.

## HTML Structure

The HTML structure includes:

- A logo section.
- A container with two main sections:
  - **Left Container:** For bill amount input, tip percentage selection, and number of people input.
  - **Right Container:** For displaying the tip amount and total amount per person, and a reset button.

## CSS Styling

The styling is designed for both desktop and mobile views:

- **Desktop View:** Two-column layout.
- **Mobile View (max-width: 768px):** Single-column layout for better readability on smaller screens.

## JavaScript Functionality

- **Custom Tip Calculation:** Calculates tip and total amount per person based on user-defined percentage.
- **Preset Tip Calculation:** Calculates tip and total amount per person for predefined percentages.
- **Reset Function:** Clears all input fields and resets the displayed results.

## How to Run

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Open `index.html` in a web browser to view the tip calculator.

## Contributing

Feel free to open issues or submit pull requests to enhance the functionality or fix bugs.


---

Let me know if there's anything specific you'd like to adjust or add!
