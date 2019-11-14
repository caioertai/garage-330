// TODO: Build an awesome garage!
const baseUrl = "https://wagon-garage-api.herokuapp.com/le_garage/cars";
const carsList = document.querySelector(".cars-list");

const carTag = car => (
  `<div class="car">
    <div class="car-image">
      <img src="http://loremflickr.com/280/280/${car.brand} ${car.model}" />
    </div>
    <div class="car-info">
      <h4>${car.brand} ${car.model}</h4>
      <p><strong>Owner:</strong>${car.owner}</p>
      <p><strong>Plate:</strong>${car.plate}</p>
    </div>
  </div>`
);

const insertCar = car => carsList.insertAdjacentHTML("beforeend", carTag(car));

const fetchAndUpdateCarsList = () => {
  fetch(baseUrl)
    .then(response => response.json())
    .then(data => data.forEach(insertCar));
};

const handleCarForm = (event) => {
  event.preventDefault();

  const car = {
    brand: document.querySelector("#brand").value,
    model: document.querySelector("#model").value,
    plate: document.querySelector("#plate").value,
    owner: document.querySelector("#owner").value,
  };

  fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(car),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(response => response.json())
    .then(insertCar);
};

export { handleCarForm, fetchAndUpdateCarsList };
