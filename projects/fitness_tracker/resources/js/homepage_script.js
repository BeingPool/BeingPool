//
// const mainImageOne = document.getElementById('main_image_one');
// const mainImageTwo = document.getElementById('main_image_two');
// const mainImageThree = document.getElementById('main_image_three');
// const mainImageFour = document.getElementById('main_image_four');
// // const sectionDividerOne = document.getElementById('section_divider_one');
// const smallBoxOne = document.getElementById('small_box_one');
// const smallBoxTwo = document.getElementById('small_box_two');
// const smallBoxThree = document.getElementById('small_box_three');
// const smallBoxFour = document.getElementById('small_box_four');
// const smallBoxFive = document.getElementById('small_box_five');
// const smallBoxSix = document.getElementById('small_box_six');
// const wideBox = document.getElementById('wide_box');
// const largeBoxOne = document.getElementById('large_box_one');
// const largeBoxTwo = document.getElementById('large_box_two');
// const largeBoxThree = document.getElementById('large_box_three');
// const division = document.getElementById('division');
// const mainColumn = document.getElementById('main_column');
// let elementList = []
// elementList.push(mainImageOne);
// elementList.push(mainImageTwo);
// elementList.push(mainImageThree);
// elementList.push(mainImageFour);
// // elementList.push(sectionDividerOne);
// elementList.push(smallBoxOne);
// elementList.push(smallBoxTwo);
// elementList.push(smallBoxThree);
// elementList.push(smallBoxFour);
// elementList.push(smallBoxFive);
// elementList.push(smallBoxSix);
// elementList.push(wideBox);
// elementList.push(largeBoxOne);
// elementList.push(largeBoxTwo);
// elementList.push(largeBoxThree);
// elementList.push(division);
// elementList.push(mainColumn);
// let elementFadeInList = []
// // elementFadeInList.push(sectionDividerOne);
// elementFadeInList.push(smallBoxOne);
// elementFadeInList.push(smallBoxTwo);
// elementFadeInList.push(smallBoxThree);
// elementFadeInList.push(smallBoxFour);
// elementFadeInList.push(smallBoxFive);
// elementFadeInList.push(smallBoxSix);
// elementFadeInList.push(wideBox);
// elementFadeInList.push(largeBoxOne);
// elementFadeInList.push(largeBoxTwo);
// elementFadeInList.push(largeBoxThree);
// elementFadeInList.push(division);
// elementFadeInList.push(mainColumn);
// const viewportHeight = document.documentElement.clientHeight;
// window.addEventListener('scroll', function() {smoothLoad()})
// const smoothLoad = function() {
//   elementFadeInList.forEach(function(item) {
//     if (item.getBoundingClientRect().top <= viewportHeight + 75) {
//       item.style.top = '0';
//       item.style.opacity = '1';
//     }
//   })
// }
// smoothLoad();
const signUpButton = document.getElementById('sign_up');
const exitButton = document.getElementById('exit_button');
const submitButton = document.getElementById('submit_button');
const signUpWindow = document.getElementById('sign_up_window');
const toggleSignUp = function() {
  if (window.getComputedStyle(signUpWindow).opacity === '0') {
    signUpWindow.style.opacity = '1';
    signUpWindow.style.zIndex = '1000000';
  } else {
    signUpWindow.style.opacity = '0';
    signUpWindow.style.zIndex = '-1000000';
  };
};
signUpButton.addEventListener('click', function() {toggleSignUp()});
exitButton.addEventListener('click', function() {toggleSignUp()});
submitButton.addEventListener('click', function() {toggleSignUp()});
