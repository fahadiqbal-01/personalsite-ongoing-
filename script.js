let hbtn = document.querySelector(".home_btn");
let abtn = document.querySelector(".about_btn");
let rbtn = document.querySelector(".resume_btn");
let pbtn = document.querySelector(".portfolio_btn");

let h_content = document.querySelector(".home");
let a_content = document.querySelector(".about");
let r_content = document.querySelector(".resume");
let p_content = document.querySelector(".portfolio");

let profile_img = document.querySelector("#profile_image");
let profile = document.querySelector(".profile");


hbtn.addEventListener("click", () => {
  h_content.style.display = "block";
  a_content.style.display = "none";
  r_content.style.display = "none";
  p_content.style.display = "none";
  profile_img.style.display = "block";
  profile.style.height = "650px";
});

abtn.addEventListener("click", () => {
  a_content.style.display = "block";
  h_content.style.display = "none";
  r_content.style.display = "none";
  p_content.style.display = "none";
  profile_img.style.display = "none";
  profile.style.height = "440px";
});

rbtn.addEventListener("click", () => {
  r_content.style.display = "block";
  h_content.style.display = "none";
  a_content.style.display = "none";
  p_content.style.display = "none";
  profile_img.style.display = "none";
  profile.style.height = "440px";
});

pbtn.addEventListener("click", () => {
  p_content.style.display = "block";
  h_content.style.display = "none";
  a_content.style.display = "none";
  r_content.style.display = "none";
  profile_img.style.display = "none";
  profile.style.height = "440px";
});