// Query Selectors
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var submitButton = document.getElementById("submitButton");

// Event Listeners
submitButton.addEventListener = ("click", submitForm);

// Functions
function enableSubmitButton() {
  if (firstName.value !== "" && lastName.value !== "") {
    // submitButton.classList.remove("disabled");
    submitButton.disabled = false;
  };
};

function submitForm() {
  console.log("submitted");
  return;
};
