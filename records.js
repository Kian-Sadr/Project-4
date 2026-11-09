const dropdown = document.getElementById("accountList");

dropdown.addEventListener("change", () => {
  const accountID = dropdown.value;

  console.log("Selected account:", accountID);
});
