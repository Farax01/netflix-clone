const emailText = document.querySelector(".email-text");
const email = document.querySelector("email");
const errorText = document.querySelector("error-text");

const emailFunction = () => {
    emailText.classList.remove("bottom-50");
    emailText.classList.add("top-0");
    emailText.classList.add("mt-1");
    emailText.style.fontSize = "15px";
};

    if (email.value === ""){
        const errorTextStyle = errorText.textContent;
        errorTextStyle = "Email is required";
    };