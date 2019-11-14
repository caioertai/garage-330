// Import file or modules
import { handleCarForm, fetchAndUpdateCarsList } from "./cars";

// Assigning Behaviors
const carForm = document.querySelector("#new-car");
carForm.addEventListener("submit", handleCarForm);

// Ajax Call
fetchAndUpdateCarsList();
