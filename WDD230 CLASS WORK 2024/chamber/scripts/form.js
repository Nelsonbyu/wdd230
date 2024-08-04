const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const feedback = document.querySelector("#feedback");

password2.addEventListener('focusout',controlar)

function controlar(){
    
    if (password1.value !== password2){
       
        password1.value = ""
        password2.value = ""
        password1.focus()

        feedback.textContent = "Vavlues do not match. Try again"

    } else{
        fb.textContent = ""
    }
}