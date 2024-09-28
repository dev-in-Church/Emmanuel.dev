//js for menu
const menuIcon = document.querySelector(".menu-icon");
const menuDisp = document.getElementById("nav");

menuDisp.style.maxHeight = "0px";

menuIcon.addEventListener("click", () => {
  if (menuDisp.style.maxHeight == "0px") {
    menuDisp.style.maxHeight = "300px";
    menuIcon.src = "assets/icons/close.svg";
  } else {
    menuDisp.style.maxHeight = "0px";
    menuIcon.src = "assets/icons/menu.png";
  }
});

/*
//js for theme

const themeImg = document.getElementById("theme-img");
const theme = document.querySelector(".theme");

themeImg.src = "assets/icons/sunny-outline.svg";

theme.addEventListener("click", () => {
  if ((themeImg.src = "assets/icons/moon-outline.svg")) {
    themeImg.src = "assets/icons/moon-outline.svg";
  } else if ((themeImg.src = "assets/icons/moon-outline.svg")) {
    themeImg.src = "assets/icons/sunny-outline.svg";
  }
});
*/

//console.log(document.activeElement);
//sharon abucheri 29yrs
//console.log(typeof NaN);
//console.log((27).toString());
//console.log("b" + "a" + +"a" + "a");--baNaNa

function pageLoader() {
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitioned", () => {
      document.body.removeChild("loader");
    });
  });
}

pageLoader();
