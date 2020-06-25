const list = document.getElementById('result_list');
const convertButton = document.getElementById('convert_button');
const baseTwoToggle = document.getElementById('base_two_toggle');
const baseThreeToggle = document.getElementById('base_three_toggle');
const baseFourToggle = document.getElementById('base_four_toggle');
const baseFiveToggle = document.getElementById('base_five_toggle');
const baseSixToggle = document.getElementById('base_six_toggle');
const baseSevenToggle = document.getElementById('base_seven_toggle');
const baseEightToggle = document.getElementById('base_eight_toggle');
const clearButton = document.getElementById('clear_button');
const baseSixteenToggle = document.getElementById('base_sixteen_toggle');
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let startNum;
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
  if (baseNum > 10) {
    newArr.forEach((element, index) => {
      if (element > 9) {
        newArr[index] = alphabet[element - 10];
      };
    })
  }
  let newNum = newArr.join('');
  return newNum;
}
const getTextContent = function(base, value) {
  let newListItem = document.createElement('li');
  newListItem.textContent = startNum + ' to Base ' + base + ': ' + value;
  list.appendChild(newListItem)
}
let childArray = [];
const createList = function() {
  childArray = [];
  if (baseTwoToggle.checked) {
    childArray.push(getTextContent('Two', convert(2)));
  };
  if (baseThreeToggle.checked) {
    childArray.push(getTextContent('Three', convert(3)))
  };
  if (baseFourToggle.checked) {
    childArray.push(getTextContent('Four', convert(4)))
  };
  if (baseFiveToggle.checked) {
    childArray.push(getTextContent('Five', convert(5)))
  };
  if (baseSixToggle.checked) {
    childArray.push(getTextContent('Six', convert(6)))
  };
  if (baseSevenToggle.checked) {
    childArray.push(getTextContent('Seven', convert(7)))
  };
  if (baseEightToggle.checked) {
    childArray.push(getTextContent('Eight', convert(8)))
  };
  if (baseSixteenToggle.checked) {
    childArray.push(getTextContent('Sixteen', convert(16)))
  };
  console.log(childArray);
  return childArray;
};
const appendChildren = function() {
  createList().forEach(function (child) {
    list.appendChild(child);
  })
}
const clearList = function() {
  let length = list.childElementCount;
  while (length >= 0) {
    length -= 1;
    list.removeChild(list.childNodes[length])
  }
  list.removeChild(list.childNodes[0]);
  console.log(length);
}
convertButton.onclick = appendChildren;
clearButton.onclick = clearList;
