const counters = {};

const newCounterForm = document.getElementById('new-counter');
newCounterForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const counterInput = document.getElementById('counter-input');
  const counterName = counterInput.value
  
  if (counterName === '') return;
  for (let key in counters) {
    if (counterName === key) return;
  }

  counters[counterName] = 0;
  counterInput.value = '';

  console.log(counters);

  appendCounters(counterName);
});

function appendCounters(name) {
  const counterContainer = document.getElementById('counter-container');
  const newListItem = document.createElement('li');

  newListItem.textContent = name;
  counterContainer.appendChild(newListItem);
}