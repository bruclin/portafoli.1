document.getElementById("btn__iniciar-secion").addEventListener("click", iniciarSesion);
document.getElementById("btn__reggidtrarse").addEventListener("click", register);

//declaracion de variables
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var formulario_logig = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja_trasera_register = document.querySelector(".caja__trasera-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");



function iniciarSesion(){

    if(window.innerWidth > 850){
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_logig.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    }else{
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_logig.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";        

    }
    
}


function register(){

    if(window.innerWidth > 850){
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_logig.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    }else{
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_logig.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "1";  

    }

    
}