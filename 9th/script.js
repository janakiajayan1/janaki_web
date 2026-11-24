function validEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.getElementById("regForm").onsubmit = function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value;

    let valid = true;

    document.querySelectorAll("span").forEach(s => s.innerHTML = "");

    if (name == "") {
        e1.innerHTML = "Name is required";
        valid = false;
    }

    if (!validEmail(email)) {
        e2.innerHTML = "Enter valid email";
        valid = false;
    }

    if (pass.length < 8) {
        e3.innerHTML = "Password must have 8 characters";
        valid = false;
    }

    if (valid) alert("Registration Successful!");
};

document.getElementById("loginForm").onsubmit = function(e) {
    e.preventDefault();

    let email = document.getElementById("lemail").value.trim();
    let pass = document.getElementById("lpass").value;

    e4.innerHTML = "";
    e5.innerHTML = "";

    let valid = true;

    if (!validEmail(email)) {
        e4.innerHTML = "Enter valid email";
        valid = false;
    }

    if (pass == "") {
        e5.innerHTML = "Password is required";
        valid = false;
    }

    if (valid) alert("Login Successful!");
};