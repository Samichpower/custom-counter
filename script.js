const newCounterForm = document.getElementById('new-counter');
newCounterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const counterInput = document.getElementById('counter-input');
  const counterName = counterInput.value
  if (counterName === '') return;
  counterInput.value = '';
  addCounter(counterName);
});

const counterContainer = document.getElementById('counter-container');
function updateLocalStorage() {
  const counterContainerInnerHTML = counterContainer.innerHTML;
  localStorage.setItem('counterData', counterContainerInnerHTML);
}

function addCounter(name) {
  const counterElement = document.createElement('li');
  counterElement.innerHTML = `
    <div>
      <span class="counter-name">${name}</span>
      <button onclick="deleteElement(this)" class="delete">x</button>
    </div>
    <div>
      <button onclick="decrementCounter(this)" class="num-button">-</button>
      <span class="number">0</span>
      <button onclick="incrementCounter(this)" class="num-button">+</button>
    </div>
  `;
  counterContainer.appendChild(counterElement);
  updateLocalStorage();
};

function incrementCounter(button) {
  const element = button.previousElementSibling;
  const number = parseInt(element.textContent);
  element.textContent = number + 1;
  updateLocalStorage();
};

function decrementCounter(button) {
  const element = button.nextElementSibling;
  const number = parseInt(element.textContent);
  if (element.textContent > 0) {
    element.textContent = number - 1;
    updateLocalStorage();
  };
};

function deleteElement(button) {
  const parentListElement = button.parentElement.parentElement;
  const toDelete = confirm(`Are you sure you wish to delete this element?`);
  if (toDelete) {
    parentListElement.classList.add('delete-animation');
    setInterval(() => {
      parentListElement.remove();
      updateLocalStorage();
    }, 1000);
  };
};

window.addEventListener('load', () => {
  counterContainer.innerHTML = localStorage.getItem('counterData');
});