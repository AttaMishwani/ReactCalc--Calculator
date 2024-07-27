# ReactCalc - Calculator 📱💻

Welcome to **ReactCalc**! This is a sleek and responsive calculator built with React, designed to provide a smooth and intuitive user experience. Whether you're crunching numbers for work, school, or daily life, ReactCalc is here to help! 🎉

## Features ✨

- **User-Friendly Interface**: A clean and simple design that makes calculations a breeze. 🚀
- **Responsive Design**: Perfectly scales across all devices, so you can use it on your phone, tablet, or desktop. 📲🖥️
- **Basic Arithmetic Operations**: Supports addition, subtraction, multiplication, and division. ➕➖✖️➗
- **Clear Function**: Quickly reset your calculations with the 'C' button. 🧼
- **Real-Time Calculation**: See your calculations update in real-time as you type. ⌨️⏱️
- **Error Handling**: Gracefully handles invalid inputs to keep your calculations on track. 🚫

## Getting Started 🚀

To get a local copy up and running, follow these simple steps:

1. **Clone the Repository**:

   ```sh
   git clone https://github.com/AttaMishwani/ReactCalc--Calculator.git
   ```

2. **Navigate to the Project Directory**:

   ```sh
   cd ReactCalc--Calculator
   ```

3. **Install Dependencies**:

   ```sh
   npm install
   ```

4. **Start the Development Server**:
   ```sh
   npm start
   ```

Your app should now be running on [http://localhost:3000](http://localhost:3000)! 🎉

## Live Demo

Check out the live version of ReactCalc [here](https://attamishwani.github.io/ReactCalc--Calculator/)! 🌐

## Usage

Simply click the buttons to perform calculations. The display will update in real-time to show your current input and the result of the calculations when you hit the '=' button. Use the 'C' button to clear the display and start fresh.

## Code Highlights 💡

### App Component

```javascript
import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  const [calVal, setcalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setcalVal("");
    } else if (buttonText === "=") {
      try {
        let result = eval(calVal);
        setcalVal(result.toString());
      } catch (error) {
        setcalVal("Error");
      }
    } else {
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display DisplayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
```

## Contributing 🤝

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Contact 📧

Atta Ur Rehman - [LinkedIn](https://www.linkedin.com/in/atta-ur-rehman-mishwani-964a58317/) - atta.rehmanmishwani@gmail.com

Project Link: [https://github.com/AttaMishwani/ReactCalc--Calculator](https://github.com/AttaMishwani/ReactCalc--Calculator)

