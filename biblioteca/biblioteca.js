const form = document.getElementById("livroForm");

form.addEventListener("submit", function(event){
    event.preventDefault();

    alert("Livro cadastrado com sucesso!");
});