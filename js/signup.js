document.addEventListener("DOMContentLoaded", function () {

    // Role Selector
    const roleBtns = document.querySelectorAll(".role-btn");
    let selectedRole = "customer";

    roleBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            roleBtns.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            selectedRole = this.dataset.role;

            // Show/hide role-specific fields
            const restaurantGroup = document.getElementById("restaurantNameGroup");
            const vehicleGroup = document.getElementById("vehicleGroup");

            restaurantGroup.classList.add("hidden");
            vehicleGroup.classList.add("hidden");

            if (selectedRole === "restaurant") {
                restaurantGroup.classList.remove("hidden");
            } else if (selectedRole === "driver") {
                vehicleGroup.classList.remove("hidden");
            }
        });
    });

    // Toggle Password Visibility
    function setupToggle(toggleId, inputId) {
        const toggleBtn = document.getElementById(toggleId);
        const input = document.getElementById(inputId);
        if (!toggleBtn || !input) return;

        toggleBtn.addEventListener("click", function () {
            const isPassword = input.type === "password";
            input.type = isPassword ? "text" : "password";
            this.querySelector("i").className = isPassword
                ? "fa-solid fa-eye-slash"
                : "fa-solid fa-eye";
        });
    }

    setupToggle("togglePass", "password");
    setupToggle("toggleConfirm", "confirmPassword");

    // Password Strength
    const passwordInput = document.getElementById("password");
    const strengthFill = document.getElementById("strengthFill");
    const strengthLabel = document.getElementById("strengthLabel");

    passwordInput.addEventListener("input", function () {
        const val = this.value;
        let score = 0;

        if (val.length >= 6) score++;
        if (val.length >= 10) score++;
        if (/[A-Z]/.test(val)) score++;
        if (/[0-9]/.test(val)) score++;
        if (/[^A-Za-z0-9]/.test(val)) score++;

        const levels = [
            { pct: "0%",   color: "#eee",    label: "Password strength" },
            { pct: "25%",  color: "#f44336", label: "Weak" },
            { pct: "50%",  color: "#ff9800", label: "Fair" },
            { pct: "75%",  color: "#2196F3", label: "Good" },
            { pct: "100%", color: "#4caf50", label: "Strong 💪" },
        ];

        const level = levels[Math.min(score, 4)];
        strengthFill.style.width = level.pct;
        strengthFill.style.background = level.color;
        strengthLabel.textContent = level.label;
        strengthLabel.style.color = level.color === "#eee" ? "#aaa" : level.color;
    });

    // Step Navigation
    const step1 = document.getElementById("formStep1");
    const step2 = document.getElementById("formStep2");
    const step1Dot = document.getElementById("step1-dot");
    const step2Dot = document.getElementById("step2-dot");
    const stepLine = document.querySelector(".step-line");
    const nextBtn = document.getElementById("nextBtn");
    const backBtn = document.getElementById("backBtn");

    nextBtn.addEventListener("click", function () {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (!email || !password || !confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }

        // Go to step 2
        step1.classList.add("hidden");
        step2.classList.remove("hidden");

        step1Dot.classList.remove("active");
        step1Dot.classList.add("done");
        step1Dot.innerHTML = "<span>✓</span>";

        step2Dot.classList.add("active");
        stepLine.classList.add("done");
    });

    backBtn.addEventListener("click", function () {
        step2.classList.add("hidden");
        step1.classList.remove("hidden");

        step1Dot.classList.remove("done");
        step1Dot.classList.add("active");
        step1Dot.innerHTML = "<span>1</span>";

        step2Dot.classList.remove("active");
        stepLine.classList.remove("done");
    });

    // Custom Checkbox
    const termsCheckmark = document.querySelector(".checkmark");
    const termsCheckbox = document.getElementById("terms");

    if (termsCheckmark) {
        termsCheckmark.addEventListener("click", function () {
            termsCheckbox.checked = !termsCheckbox.checked;
        });
    }

    // Form Submit
    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const phone = document.getElementById("phone").value;
        const terms = document.getElementById("terms").checked;

        if (!firstName || !lastName || !phone) {
            alert("Please fill in all required fields.");
            return;
        }

        if (!terms) {
            alert("Please agree to the Terms & Conditions.");
            return;
        }

        // Simulate registration
        const submitBtn = document.getElementById("submitBtn");
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Creating...';
        submitBtn.disabled = true;

        setTimeout(() => {
            alert(`🎉 Account created successfully!\nWelcome, ${firstName}! You registered as a ${selectedRole}.`);
            window.location.href = "login.html";
        }, 1500);
    });

});
