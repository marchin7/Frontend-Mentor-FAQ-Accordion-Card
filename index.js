const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((item) => {
    item.addEventListener("click", () => {
        faqQuestions.forEach((question) => {
            if (item !== question) {
                question.nextElementSibling.style.maxHeight = "0px";
                question.firstElementChild.classList.remove("rotate");
                question.classList.remove("active");
                question.setAttribute("aria-expanded", "false");
            } else {
                if (question.nextElementSibling.style.maxHeight === question.nextElementSibling.scrollHeight + "px") {
                    question.nextElementSibling.style.maxHeight = "0px";
                    question.setAttribute("aria-expanded", "false");
                } else {
                    question.nextElementSibling.style.maxHeight = question.nextElementSibling.scrollHeight + "px";
                    question.setAttribute("aria-expanded", "true");
                }
                question.firstElementChild.classList.toggle("rotate");
                question.classList.toggle("active");
            }
        });
    });
});
