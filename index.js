
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question =>{question.addEventListener('click', ()=>{
    faqQuestions.forEach(activeQuestion =>{
        if(question !== activeQuestion) {
            activeQuestion.nextElementSibling.classList.remove('active')
            activeQuestion.firstElementChild.classList.remove('rotate')
            activeQuestion.classList.remove('active')
        }
        else {
            activeQuestion.nextElementSibling.classList.toggle('active')
            activeQuestion.firstElementChild.classList.toggle('rotate')
            activeQuestion.classList.toggle('active') 
        }
    })
})});