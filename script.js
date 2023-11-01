document.addEventListener('DOMContentLoaded', () => {
    const name = document.getElementById('name');
    const mobile = document.getElementById('mobile');
    const email = document.getElementById('email');
    const roll = document.getElementById('roll');
    const password = document.getElementById('password');
    const form = document.getElementById('form');
    const errorElement = document.getElementById('error');

    form.addEventListener('submit', (e) => {
        let messages = [];

        if (name.value === "" || name.value === null) {
            messages.push('Name is required');
        }
        if (!/^[0-9]{10}$/.test(mobile.value)) {
            messages.push("Mobile number must be 10 digits");
        }
        if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
            messages.push("Invalid email address");
        }
        if (roll.value === "" || roll.value === null) {
            messages.push('College Roll Number is required');
        }
        if (password.value.length <= 6) {
            messages.push("Password must be greater than 6 characters");
        }
        if (password.value.length >= 20) {
            messages.push("Password must be less than 20 characters");
        }
        if (password.value === "password") {
            messages.push("Password cannot be 'password'");
        }

        if (messages.length > 0) {
            e.preventDefault();
            const errorMessage = messages.join('\n');
            alert(errorMessage);
            errorElement.innerHTML = "<ul><li>" + messages.join('</li><li>') + "</li></ul>";
        } else {
            const confirmationResult = confirm("Do you want to submit the form?");
            if (!confirmationResult) {
                e.preventDefault();
                alert("Form submission canceled!");
            }
        }
    });
});
