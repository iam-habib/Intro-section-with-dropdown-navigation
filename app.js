const features = document.querySelector(".features");
const company = document.querySelector(".company");
const arrowUp = document.querySelectorAll(".arrow-up");
const arrowDown = document.querySelectorAll(".arrow-down");
const mobilemenu = document.getElementById("mobile_menu");
const featuresDropDown = document.querySelector(".features_dropdown");
const companyDropDown = document.querySelector(".company_dropdown");

const mobileNav = document.querySelector(".nav_items");

features.addEventListener("click", function () {
  if (!features.classList.contains("active_li")) {
    arrowUp[0].style.display = "block";
    arrowDown[0].style.display = "none";
    features.classList.add("active_li");
    arrowUp[0].classList.add("active_li");
    featuresDropDown.classList.remove("hide");
  } else if (features.classList.contains("active_li")) {
    features.classList.remove("active_li");
    arrowUp[0].classList.remove("active_li");
    arrowUp[0].style.display = "none";
    arrowDown[0].style.display = "block";
    featuresDropDown.classList.add("hide");
  }
});

company.addEventListener("click", function () {
  if (!company.classList.contains("active_li")) {
    arrowUp[1].style.display = "block";
    arrowDown[1].style.display = "none";
    arrowUp[1].classList.add("active_li");
    company.classList.add("active_li");
    companyDropDown.classList.remove("hide");
  } else if (company.classList.contains("active_li")) {
    companyDropDown.classList.add("hide");
    company.classList.remove("active_li");
    arrowUp[1].classList.remove("active_li");
    arrowUp[1].style.display = "none";
    arrowDown[1].style.display = "block";
  }
});

// mobile menu

mobilemenu.addEventListener("click", function () {
  mobilemenu.classList.toggle("active");
  mobileNav.classList.toggle("active");
  document.querySelector("main").classList.toggle("overlay");
});
