const newCounterForm = document.getElementById('new-counter');
newCounterForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const counterInput = document.getElementById('counter-input');
  const counterName = counterInput.value
  if (counterName === '') return;
  counterInput.value = '';
  addCounter(counterName);
});

function addCounter(name) {
  const counterContainer = document.getElementById('counter-container');
  const counterElement = document.createElement('li');

  counterElement.innerHTML = `
    <span class="counter-name">${name}</span>
    <button onclick="decrementCounter(this)" class="button">-</button>
    <span>0</span>
    <button onclick="incrementCounter(this)" class="button">+</button>
    <button onclick="deleteElement(this)" class="button">x</button>
  `;
  counterContainer.appendChild(counterElement);
};

function incrementCounter(button) {
  const element = button.previousElementSibling;
  const number = parseInt(element.textContent);
  element.textContent = number + 1;
};

function decrementCounter(button) {
  const element = button.nextElementSibling;
  const number = parseInt(element.textContent);
  if (element.textContent > 0) {
    element.textContent = number - 1;
  };
};

function deleteElement(button) {
  const parent = button.parentElement;
  const toDelete = confirm(`Are you sure you wish to delete this element?`);
  if (toDelete) {
    parent.remove();
  }
}