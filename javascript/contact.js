function validateForm() {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const message = document.getElementById("message").value.trim();

            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const phonePattern = /^\d{10}$/;

            if (!name) {
                alert("Please enter your full name.");
                return false;
            }
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return false;
            }
            if (!phonePattern.test(phone)) {
                alert("Please enter a valid 10-digit phone number.");
                return false;
            }
            if (!message) {
                alert("Please enter your message.");
                return false;
            }

            alert("Thank you for contacting us. We will get back to you via email.");
            document.getElementById("contactForm").reset();
            return false;  // Prevent actual form submission for demo purposes
        }