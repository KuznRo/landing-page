const submitBtn = document.getElementById("submit-btn");
const offerBtn = document.querySelectorAll("#offer-btn");

const backToTop = document.getElementById("back-to-top")

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

offerBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Button Functional!");
  });
});


  submitBtn.addEventListener("click", () => {
    alert("Your message has been sent!")
  })


  
  backToTop.addEventListener("click", (e) => {
    e.preventDefault();
  
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });