const button = document.getElementById("sendForm");
const email = document.getElementById("email");
const warning = document.getElementById("warning");
const succes = document.getElementById("succes");
button.addEventListener("click", formSend);
function formSend(e) {
    e.preventDefault();
    const emptyEmail = email.value.trim() === "";
    const validateEmail = email.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (emptyEmail) {
        warning.classList.add("visible");
        succes.classList.remove("visible");
    } else if (!validateEmail) {
        warning.textContent = "Invalid email";
        warning.classList.add("visible");
        succes.classList.remove("visible");
    } else {
        warning.classList.remove("visible");
        succes.classList.add("visible");
        email.value = "";
    }
}

//# sourceMappingURL=index.09c24910.js.map
