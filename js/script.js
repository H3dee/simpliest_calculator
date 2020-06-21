const keys = document.querySelector(".window_keys");
let numbers = [];

keys.addEventListener("click", (event) => {
  event.preventDefault();
  let result = document.querySelector("#result");
  let clickedKey = event.target.textContent;


  const textPusher = (text) => {
    if (result.textContent === "0") {
      result.textContent = " ";
      result.textContent += text;
    } else result.textContent += text;
  };

  const arrayChecker = (number, array) => {
    if (array.length != 0) array.push(number);
  };

  const operation = (sign) => {
    numbers.splice(0, numbers.length); //array cleaning
    numbers.push(Number(result.textContent), sign);
    result.textContent += sign;
  };

  switch (clickedKey) {
    case "1":
      textPusher("1");
      arrayChecker(Number("1"), numbers);
      break;
    case "2":
      textPusher("2");
      arrayChecker(Number("2"), numbers);
      break;
    case "3":
      textPusher("3");
      arrayChecker(Number("3"), numbers);
      break;
    case "4":
      textPusher("4");
      arrayChecker(Number("4"), numbers);
      break;
    case "5":
      textPusher("5");
      arrayChecker(Number("5"), numbers);
      break;
    case "6":
      textPusher("6");
      arrayChecker(Number("6"), numbers);
      break;
    case "7":
      textPusher("7");
      arrayChecker(Number("7"), numbers);
      break;
    case "8":
      textPusher("8");
      arrayChecker(Number("8"), numbers);
      break;
    case "9":
      textPusher("9");
      arrayChecker(Number("9"), numbers);
      break;
    case "0":
      textPusher("0");
      arrayChecker(Number("0"), numbers);
      break;
    case "00":
      if(result.textContent.charAt(0) !== '0')
            {
            textPusher("00");
            arrayChecker(Number("00"), numbers);
            }
      break;
    case ".":
      textPusher(".");
      arrayChecker(Number("."), numbers);
      break;
    case "AC":
      numbers.splice(0, numbers.length);
      result.textContent = "0";
      break;
    case "=":
      let resultOfOperation = 0;
      numbers[2] = Number(
        result.textContent.substring(
          result.textContent.indexOf(`${numbers[1]}`) + 1
        )
      );

      if (numbers[1] === "+") resultOfOperation = numbers[0] + numbers[2];
      else if (numbers[1] === "-") resultOfOperation = numbers[0] - numbers[2];
      else if (numbers[1] === "%") resultOfOperation = numbers[0] % numbers[2];
      else if (numbers[1] === "*") resultOfOperation = numbers[0] * numbers[2];
      else if (numbers[1] === "/") resultOfOperation = numbers[0] / numbers[2];
      result.textContent = `${resultOfOperation}`;
        numbers.splice(0,numbers.length)
      break;
    case "+":
      if(numbers[1] === undefined) operation("+");
      break;
    case "-":
      if(numbers[1] === undefined) operation("-");
      break;
    case "%":
      if(numbers[1] === undefined) operation("%");
      break;
    case "*":
      if(numbers[1] === undefined) operation("*");
      break;
    case "/":
      if(numbers[1] === undefined) operation("/");
      break;
  }
});
