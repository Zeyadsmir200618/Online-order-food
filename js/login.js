document.addEventListener("DOMContentLoaded", function () {

    // Role Selector
    const roleBtns = document.querySelectorAll(".role-btn");
    let selectedRole = "customer";

    roleBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            roleBtns.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            selectedRole = this.dataset.role;
        });
    });

    // Toggle Password Visibility
    const togglePass = document.getElementById("togglePass");
    const passwordInput = document.getElementById("password");

    togglePass.addEventListener("click", function () {
        const isPassword = passwordInput.type === "password";
        passwordInput.type = isPassword ? "text" : "password";
        this.querySelector("i").className = isPassword
            ? "fa-solid fa-eye-slash"
            : "fa-solid fa-eye";
    });

    // Custom Checkbox
    const rememberCheckbox = document.getElementById("remember");
    const checkmark = document.querySelector(".checkmark");

    checkmark.addEventListener("click", function () {
        rememberCheckbox.checked = !rememberCheckbox.checked;
    });

    // Form Submit
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        // Simulate login
        const btn = document.querySelector(".submit-btn");
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Signing In...';
        btn.disabled = true;

        setTimeout(() => {
            alert(`✅ Welcome back!\nLogged in as: ${selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}`);
            btn.innerHTML = '<span>Sign In</span><i class="fa-solid fa-arrow-right"></i>';
            btn.disabled = false;
            loginForm.reset();
        }, 1500);
    });

    // Google Login
    document.querySelector(".social-btn.google").addEventListener("click", function () {
        alert("Google login integration coming soon!");
    });

});
