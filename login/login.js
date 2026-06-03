const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");

    if(!email.includes("@")){
        mensagem.innerHTML = "E-mail inválido!";
        return;
    }

    if(senha.length < 8){
        mensagem.innerHTML = "A senha deve ter no mínimo 8 caracteres!";
        return;
    }

    // Login válido
    window.location.href = "formulario.html";
});