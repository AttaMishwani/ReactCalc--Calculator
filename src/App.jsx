import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  // useState hook to manage the current value displayed on the calculator
  const [calVal, setcalVal] = useState("");

  // Function to handle button clicks
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      // Clear the display if 'C' button is pressed
      setcalVal("");
    } else if (buttonText === "=") {
      // Evaluate the expression if '=' button is pressed
      // WARNING: Using eval can be dangerous if the input is not sanitized
      try {
        let result = eval(calVal);
        setcalVal(result.toString()); // Convert result to string to display correctly
      } catch (error) {
        setcalVal("Error"); // Handle invalid expressions
      }
    } else {
      // Append the button text to the current display value for all other buttons
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
    }
  };

  return (
    <>
      <div className={styles.calculator}>
        {/* Display component to show the current value */}
        <Display DisplayValue={calVal}></Display>

        {/* ButtonsContainer component to render all calculator buttons */}
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </div>
    </>
  );
}

export default App;
