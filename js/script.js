const nombre = document.getElementById("Nombre")
const email = document.getElementById("Email")
const texto = document.getElementById("my-textarea")
const form = document.getElementById("Form")
const parrafo = document.getElementById("warning")

form.addEventListener("submit",e=>{
    e.preventDefault()
    let warnings = ""
    let ExpEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
    let entrar = false
    if(nombre.value.length == 0)
    {
        warnings += "Por favor ingrese el nombre <br>"
        entrar = true
    }
    if(!ExpEmail.test(email.value))
    {
        warnings += "Email Invalido <br>"
        entrar= true
    }

    if(entrar)
    {
        parrafo.innerHTML = warnings
        
    }
})