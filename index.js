
const faqQuestions = document.querySelectorAll('.faq-question');
const faqAnswers = document.querySelectorAll('.faq-answer');


faqQuestions.forEach(item=> {item.addEventListener('click', ()=> {
    faqQuestions.forEach(question=> {
        if(item !== question){
            question.nextElementSibling.style.maxHeight = '0px'
            question.firstElementChild.classList.remove('rotate')
            question.classList.remove('active')
        }
        else{
            if(question.nextElementSibling.style.maxHeight === question.nextElementSibling.scrollHeight + 'px'){
                question.nextElementSibling.style.maxHeight = '0px'
            }
            else{question.nextElementSibling.style.maxHeight = question.nextElementSibling.scrollHeight + 'px'}
        question.firstElementChild.classList.toggle('rotate')
        question.classList.toggle('active')
        }
    })
})});



















/*

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

*/