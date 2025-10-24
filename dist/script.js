const password = document.getElementById("password");

function tryLogin() {
    let isStrong = isStrongPassword(password.value);
    alert(`password is ${isStrong ? "strong" : "weak"}`);
}

function isStrongPassword(password) {
    let result = true;

    if (password.length < 8) {
        result = false;
    }
    else if (password.includes("password")) {
        result = false;
    }
    else if (password == password.toLowerCase()) {
        result = false;
    }

    return result;
}
