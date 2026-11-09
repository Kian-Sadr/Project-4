const form = document.getElementById("userForm");

form.addEventListener("submit", (event) => {

  event.preventDefault();

  const formData = {

    fullName: document.getElementById("fullName").value,

    platform:document.querySelector('input[name="platform"]:checked')?.value || "",

    major: document.getElementById("major").value,

    year: document.getElementById("year").value,

    satisfaction: document.getElementById("satisfaction").value,

    comments:document.getElementById("comments").value
  };

  console.log(formData);

  alert("Form submitted.");

});
