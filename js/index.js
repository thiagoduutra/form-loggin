function showPass() {
  const eye = document.getElementById("eye");
  const noeye = document.getElementById("no-eye");
  const fieldPass = document.getElementById("field-password");

  if (eye.style.display === "none") {
    eye.style.display = "block";
    noeye.style.display = "none";
    fieldPass.type = "text";
  } else {
    eye.style.display = "none";
    noeye.style.display = "block";
    fieldPass.type = "password";
  }
}

document.getElementById("btn-login").addEventListener("click", function (e) {
  e.preventDefault();
  alert("Logado!");
});
