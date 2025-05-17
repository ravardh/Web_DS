function Submit() {
  const nm = document.getElementById("fullName").value.trim();
  const em = document.getElementById("email").value.trim();
  const ph = document.getElementById("phone").value.trim();
  const dob = document.getElementById("dob").value.trim();
  const ps = document.getElementById("password").value.trim();

  document.querySelectorAll(".error").forEach((element) => {
    element.innerText = "";
  });

  if (!/^[A-Za-z ]+$/.test(nm) || nm.length < 3) {
    document.getElementById("nameError").innerText =
      "Name must me atleast 3 characters and contains only Alphabets";
  }

  if (!/^[a-zA-Z_\d]+@(gmail|yahoo).com$/.test(em) || em.length < 10) {
    document.getElementById("emailError").innerText =
      "Please enter a Valid Email";
  }

  if (!/^[6-9]\d{9}$/.test(ph) || ph.length > 10) {
    document.getElementById("phoneError").innerText =
      "Please enter a Valid indian Phone Number";
  }


}
