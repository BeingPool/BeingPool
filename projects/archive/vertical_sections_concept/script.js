const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const h11 = document.getElementById("h11");
const div1 = document.getElementById("div1");
const h12 = document.getElementById("h12");
const h13 = document.getElementById("h13");
const h14 = document.getElementById("h14");
const h15 = document.getElementById("h15");
const img1 = document.getElementById("h15");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");
const div2 = document.getElementById("div2");
const div5 = document.getElementById("div5");
const divOneGrow = () => {
  if (h11.innerHTML === 'USA.') {
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    img5.style.display = "none";
    h11.innerHTML = "Ellis Island.";
    div1.style.flexBasis = "2150px";
    h12.style.fontSize = "0px";
    h13.style.fontSize = "0px";
    h14.style.fontSize = "0px";
    h15.style.fontSize = "0px";
    img2.style.fontSize = "0px";
    img3.style.fontSize = "0px";
    img4.style.fontSize = "0px";
    img5.style.fontSize = "0px";
  } else {
    img2.style.display = "inline-block";
    img3.style.display = "inline-block";
    img4.style.display = "inline-block";
    img5.style.display = "inline-block";
    h11.innerHTML = "USA.";
    div1.style.flexBasis = "250px";
    h12.style.fontSize = "2.5rem";
    h13.style.fontSize = "2.5rem";
    h14.style.fontSize = "2.5rem";
    h15.style.fontSize = "2.5rem";
    img2.style.fontSize = "2.5rem";
    img3.style.fontSize = "2.5rem";
    img4.style.fontSize = "2.5rem";
    img5.style.fontSize = "2.5rem";
  }
}
const divTwoGrow = () => {
  if (h12.innerHTML === 'China.') {
    img1.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    img5.style.display = "none";
    h12.innerHTML = "Great Wall.";
    div2.style.flexBasis = "2150px";
    h11.style.fontSize = "0px";
    h13.style.fontSize = "0px";
    h14.style.fontSize = "0px";
    h15.style.fontSize = "0px";
    img1.style.fontSize = "0px";
    img3.style.fontSize = "0px";
    img4.style.fontSize = "0px";
    img5.style.fontSize = "0px";
  } else {
    img1.style.display = "inline-block";
    img3.style.display = "inline-block";
    img4.style.display = "inline-block";
    img5.style.display = "inline-block";
    h12.innerHTML = "China.";
    div2.style.flexBasis = "250px";
    h11.style.fontSize = "2.5rem";
    h13.style.fontSize = "2.5rem";
    h14.style.fontSize = "2.5rem";
    h15.style.fontSize = "2.5rem";
    img1.style.fontSize = "2.5rem";
    img3.style.fontSize = "2.5rem";
    img4.style.fontSize = "2.5rem";
    img5.style.fontSize = "2.5rem";
  }
}
const divThreeGrow = () => {
  if (h13.innerHTML === 'France.') {
    img2.style.display = "none";
    img1.style.display = "none";
    img4.style.display = "none";
    img5.style.display = "none";
    h13.innerHTML = "Eiffel Tower.";
    div3.style.flexBasis = "2150px";
    h12.style.fontSize = "0px";
    h11.style.fontSize = "0px";
    h14.style.fontSize = "0px";
    h15.style.fontSize = "0px";
    img2.style.fontSize = "0px";
    img1.style.fontSize = "0px";
    img4.style.fontSize = "0px";
    img5.style.fontSize = "0px";
  } else {
    img2.style.display = "inline-block";
    img1.style.display = "inline-block";
    img4.style.display = "inline-block";
    img5.style.display = "inline-block";
    h13.innerHTML = "France.";
    div3.style.flexBasis = "250px";
    h12.style.fontSize = "2.5rem";
    h11.style.fontSize = "2.5rem";
    h14.style.fontSize = "2.5rem";
    h15.style.fontSize = "2.5rem";
    img2.style.fontSize = "2.5rem";
    img1.style.fontSize = "2.5rem";
    img4.style.fontSize = "2.5rem";
    img5.style.fontSize = "2.5rem";
  }
}
const divFourGrow = () => {
  if (h14.innerHTML === 'India.') {
    img2.style.display = "none";
    img3.style.display = "none";
    img1.style.display = "none";
    img5.style.display = "none";
    h14.innerHTML = "Taj Mahal.";
    div4.style.flexBasis = "2150px";
    h12.style.fontSize = "0px";
    h13.style.fontSize = "0px";
    h11.style.fontSize = "0px";
    h15.style.fontSize = "0px";
    img2.style.fontSize = "0px";
    img3.style.fontSize = "0px";
    img1.style.fontSize = "0px";
    img5.style.fontSize = "0px";
  } else {
    img2.style.display = "inline-block";
    img3.style.display = "inline-block";
    img1.style.display = "inline-block";
    img5.style.display = "inline-block";
    h14.innerHTML = "India.";
    div4.style.flexBasis = "250px";
    h12.style.fontSize = "2.5rem";
    h13.style.fontSize = "2.5rem";
    h11.style.fontSize = "2.5rem";
    h15.style.fontSize = "2.5rem";
    img2.style.fontSize = "2.5rem";
    img3.style.fontSize = "2.5rem";
    img1.style.fontSize = "2.5rem";
    img5.style.fontSize = "2.5rem";
  }
}
const divFiveGrow = () => {
  if (h15.innerHTML === 'Russia.') {
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    img1.style.display = "none";
    h15.innerHTML = "Kremlin.";
    div5.style.flexBasis = "2150px";
    h12.style.fontSize = "0px";
    h13.style.fontSize = "0px";
    h14.style.fontSize = "0px";
    h11.style.fontSize = "0px";
    img2.style.fontSize = "0px";
    img3.style.fontSize = "0px";
    img4.style.fontSize = "0px";
    img1.style.fontSize = "0px";
  } else {
    img2.style.display = "inline-block";
    img3.style.display = "inline-block";
    img4.style.display = "inline-block";
    img1.style.display = "inline-block";
    h15.innerHTML = "Russia.";
    div5.style.flexBasis = "250px";
    h12.style.fontSize = "2.5rem";
    h13.style.fontSize = "2.5rem";
    h14.style.fontSize = "2.5rem";
    h11.style.fontSize = "2.5rem";
    img2.style.fontSize = "2.5rem";
    img3.style.fontSize = "2.5rem";
    img4.style.fontSize = "2.5rem";
    img1.style.fontSize = "2.5rem";
  }
}
div1.addEventListener("click", divOneGrow);
div2.addEventListener("click", divTwoGrow);
div3.addEventListener("click", divThreeGrow);
div4.addEventListener("click", divFourGrow);
div5.addEventListener("click", divFiveGrow);
