const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const mensaje = document.getElementById("login-message");

    if (email === "admin@tcgapp.cl" && password === "admin123") {
        window.location.href = "../admin/admin.html";
    } else if (email === "user@tcgapp.cl" && password === "user123") {
        window.location.href = "../jugador/jugador.html";
    } else {
        mensaje.textContent = "Correo o contraseña incorrectos.";
    }
});