const form = document.getElementById("surveyForm");
const responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

 
const formData = new FormData(form);
const data = Object.fromEntries(formData.entries());
console.log(data);
form.reset();
});
