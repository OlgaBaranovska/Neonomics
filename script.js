document.addEventListener('DOMContentLoaded', function(){
    new CustomSelect({
        elem: "department-select",
    });

    const form = document.getElementById("form");
    const formSubmit = document.getElementById("form-submit");

    const formField = document.querySelectorAll(".js-form-field");
    const fullNameInput = document.getElementById('full_name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const validationLetters = /^[a-zA-Zа-яА-Я ]+$/;
    const validationEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validationMessage = /^[\S\s]{50,}$/;

    const validateInputData = (validationItem, validationRule) => {
        if(validationItem.value.match(validationRule)) {
            validationItem.parentElement.classList.remove("form-field--error");
            return true;
        } else{
            validationItem.parentElement.classList.add("form-field--error");
            return false;
        }
    }

    formField.forEach((input) => {
        input.onchange = function(event) {

            if(event.target === fullNameInput ) {
                validateInputData(fullNameInput, validationLetters);
            } else if(event.target === emailInput) {
                validateInputData(emailInput, validationEmail);
            } else if(event.target === messageInput) {
                validateInputData(messageInput, validationMessage);
            }


            if(this.value) {
                this.parentElement.classList.remove("form-field--empty");
            } else {
                this.parentElement.classList.add("form-field--empty");
            }
            formSubmit.disabled = document.querySelectorAll(".form-field--empty").length || document.querySelectorAll(".form-field--error").length ? true : false;

        };
    });

    form.onsubmit = function(e) {
        e.preventDefault();
        const fullNameValue = fullNameInput.value;
        const emailValue = emailInput.value;
        const messageValue = messageInput.value;

        const result = {
            fullName: fullNameValue,
            email: emailValue,
            message: messageValue
        };

        console.log(result);
    };

});