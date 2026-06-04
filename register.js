// ======================================
// FORM
// ======================================

const form =
    document.getElementById("registerForm");

const successMessage =
    document.getElementById("successMessage");



// ======================================
// FORM SUBMIT
// ======================================

form.addEventListener("submit", async (e) => {

    e.preventDefault();



    // FORM DATA
    const formData =
        new FormData(form);



    // SEND TO FORMSPREE
    const response = await fetch(form.action, {

        method: "POST",

        body: formData,

        headers: {
            Accept: "application/json"
        }

    });



    // SUCCESS
    if (response.ok) {

        successMessage.innerHTML =
            "Application submitted successfully!";

        successMessage.style.color =
            "#7CFC8A";



        // CLEAR FORM
        form.reset();

    }



    // ERROR
    else {

        successMessage.innerHTML =
            "Something went wrong. Please try again.";

        successMessage.style.color =
            "#ff6b6b";

    }

});