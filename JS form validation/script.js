const registrationForm = document.getElementById("registrationForm")

registrationForm.addEventListener("submit", event => {
    event.preventDefault();

    
    clearErrors();

    // Validate form fields
    let isValid = true;

    // Name
    const name = document.getElementById("name").value;
    if (name.length < 3 || name.length > 50) {
        showError("nameError", "Name must be between 3 and 50 characters.");
        isValid = false;
    }

    // Email
    const email = document.getElementById("email").value;
    if (!email) {
        showError("emailError", "Email is required.");
        isValid = false;
    }

    // Phone
    const phone = document.getElementById("phone").value;
    if (phone.length < 10 || phone.length > 14) {
        showError("phoneError", "Phone number must be between 10 and 14 characters.");
        isValid = false;
    }

    //  Age
    const age = document.getElementById("age").value;
    if (age < 12 || age > 100) {
        showError("ageError", "Age must be between 12 and 100.");
        isValid = false;
    }

    // Gender
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        showError("genderError", "Gender is required.");
        isValid = false;
    }

    // form is valid
    if (isValid) {
        alert("Form submitted successfully!");
        
    }
});


function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

function clearErrors() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(element => {
        element.textContent = "";
    });
}  