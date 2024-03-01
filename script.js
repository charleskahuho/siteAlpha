const openform = document.querySelector('#openForm')
const home = document.querySelector('.home')
const container = document.querySelector('.form-container')
const closebtn = document.querySelector('.form-close')
const login = document.querySelector('#login')
const signup = document.querySelector('#signup')
const psshow = document.querySelectorAll('.pw_hide')

openform.addEventListener('click', () => home.classList.add("show"))
closebtn.addEventListener('click', () => home.classList.remove("show"))

signup.addEventListener('click', (e) =>{
    e.preventDefault()
    container.classList.add("active")
})
login.addEventListener('click', (e) =>{
    e.preventDefault()
    container.classList.remove("active")
})

psshow.forEach(icon => {
    icon.addEventListener('click', () => {
        let inpt = icon.parentElement.querySelector('input')
        // console.log(inpt)
        if(inpt.type == "password"){
            inpt.type = "text"
            icon.classList.replace("uil-eye-slash", "uil-eye")
        }else{
            inpt.type = "password"
            icon.classList.replace("uil-eye", "uil-eye-slash")
        }
})
})