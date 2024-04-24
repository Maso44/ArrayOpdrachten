const addPassengerBtn = document.getElementById('addPassenger');
const removePassengerBtn = document.getElementById('removePassenger');
const shufflePassengersBtn = document.getElementById('shufflePassengers');
const exitBusBtn = document.getElementById('exitBus');
const passengerList = document.getElementById('passengerList');
const remainingPassengersEl = document.getElementById('remainingPassengers');

let passengers = ['John', 'Sarah', 'Peter', 'Amy', 'Mike', 'Jessica', 'Daniel', 'Emma', 'Anthony', 'Olivia'];

function displayPassengers() {
  passengerList.innerHTML = '';
  for (let i = 0; i < passengers.length; i++) {
    const li = document.createElement('li');
    li.textContent = `Passenger ${i+1}: ${passengers[i]}`;
    passengerList.appendChild(li);
  }
  remainingPassengersEl.textContent = `There are ${passengers.length} passengers currently on the bus.`;
}

addPassengerBtn.addEventListener('click', () => {
  passengers.push('David');
  displayPassengers();
});

removePassengerBtn.addEventListener('click', () => {
  if (passengers.length > 4) {
    passengers.splice(4, 1);
    displayPassengers();
  }
});

shufflePassengersBtn.addEventListener('click', () => {
  passengers = passengers.sort(() => Math.random() - 0.5);
  displayPassengers();
});

exitBusBtn.addEventListener('click', () => {
  while (passengers.length > 0) {
    passengers.pop();
  }
  displayPassengers();
  remainingPassengersEl.textContent = 'No passengers remaining on the bus.';
});

displayPassengers();