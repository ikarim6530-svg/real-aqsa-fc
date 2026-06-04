// =====================================
// ELEMENTS
// =====================================

const email =
    document.getElementById("email");

const phone =
    document.getElementById("phone");

const message =
    document.getElementById("copyMessage");



// =====================================
// COPY EMAIL
// =====================================

email.addEventListener("click", () => {

    navigator.clipboard.writeText(
        "realaqsafc@yahoo.com"
    );

    message.innerHTML =
        "Email copied to clipboard!";

});



// =====================================
// COPY PHONE
// =====================================

phone.addEventListener("click", () => {

    navigator.clipboard.writeText(
        "07391790247"
    );

    message.innerHTML =
        "Phone number copied to clipboard!";

});



// =====================================
// CLEAR MESSAGE
// =====================================

setInterval(() => {

    message.innerHTML = "";

}, 3000);