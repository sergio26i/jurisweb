const name = document.getElementById("name");
const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push("Por favor, insira o seu Nome!")
    }
    if (email.value === '' || email.value == null) {
        messages.push("Por favor, adicione um Email válido!")
    }
});

