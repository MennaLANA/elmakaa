const prevBtns = document.querySelectorAll(".prev");
const nextBtns = document.querySelectorAll(".next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
    });
});

prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
    });
});

function updateFormSteps() {
    formSteps.forEach((formStep) => {
    formStep.classList.contains("form-active") &&
    formStep.classList.remove("form-active");
    });

    formSteps[formStepsNum].classList.add("form-active");
}

function updateProgressbar() {
    progressSteps.forEach((progressStep, idx) => {
        if (idx < formStepsNum + 1) {
        progressStep.classList.add("progress-active");
        } else {
        progressStep.classList.remove("progress-active");
        }
    });
}

//silder
let swiper = new Swiper(".swiper", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 6,
        },
    },
});