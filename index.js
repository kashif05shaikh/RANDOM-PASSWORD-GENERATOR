// Select elements
const btnEl = document.querySelector(".btn");
const copyicon = document.querySelector(".fa-copy");
const inputEl = document.getElementById("input1");
const alertContainerEl = document.querySelector(".alert-container");

// Generate password when button clicked
btnEl.addEventListener("click", () => {
    createPassword();
});

// Copy password and show alert, then clear input
copyicon.addEventListener("click", () => {
    if (!inputEl.value) return; // do nothing if input is empty
    // Call the copy function
    copyPassword();
    // Show alert with actual password
    alertContainerEl.textContent = inputEl.value + " copied";
    alertContainerEl.classList.add("active");
    // Hide alert after 2 seconds
    setTimeout(() => {
        alertContainerEl.classList.remove("active");
    }, 2000);
    // Clear input after copying
    inputEl.value = "";
});


// Function to generate a random password
function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const password_len = 14;
    let password = ""; // start empty
    for (let i = 0; i < password_len; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars[randomNum];
    }
    inputEl.value = password; // display generated password
}

// Optional: function to copy (works on mobile)
function copyPassword() {
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);
}
