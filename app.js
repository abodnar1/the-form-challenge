// Query Selectors
var firstNameInput = document.getElementById("firstName");
var lastNameInput = document.getElementById("lastName");
var submitButton = document.getElementById("submitButton");

// Event Listeners
firstNameInput.addEventListener("keyup", enableSubmitButton);
lastNameInput.addEventListener("keyup", enableSubmitButton);
submitButton.addEventListener("click", submitForm);

// Functions
function enableSubmitButton() {
  if (firstNameInput.value !== "" && lastNameInput.value !== "") {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  };
};

function resetForm() {
  firstNameInput.value = "";
  lastNameInput.value = "";
};

function submitForm(e) {
  e.preventDefault();
  console.log("submitted");
  resetForm();
  return;
};
