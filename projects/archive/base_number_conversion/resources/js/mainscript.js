// Global Variables
const userInput = document.getElementById('userInput');
const baseTwo = document.getElementById('base_2');
const baseThree = document.getElementById('base_3');
const baseFour = document.getElementById('base_4');
const baseFive = document.getElementById('base_5');
const baseSix = document.getElementById('base_6');
const baseSeven = document.getElementById('base_7');
const baseEight = document.getElementById('base_8');
const baseSixteen = document.getElementById('base_16');
const convertButton = document.getElementById('convert_button');
// Input Variables
let startNum = Math.abs(Number(userInput.value));
// Conversion Functions
const convert = function(baseNum) {
  startNum = Math.abs(Number(userInput.value));
  let currNum = startNum;
  let newArr = [];
  let temp = 0;
  while (currNum > 0) {
    temp = currNum % baseNum;
    newArr.splice(0, 0, temp);
    currNum= Math.floor(currNum / baseNum);
  }
  let newNum = newArr.join('');
  return newNum;
}
const replaceValues = function() {
  baseTwo.innerHTML = convert(2);
  baseThree.innerHTML = convert(3);
  baseFour.innerHTML = convert(4);
  baseFive.innerHTML = convert(5);
  baseSix.innerHTML = convert(6);
  baseSeven.innerHTML = convert(7);
  baseEight.innerHTML = convert(8);
  baseSixteen.innerHTML = convert(16);
}

convertButton.onclick = replaceValues;
