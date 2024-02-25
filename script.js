const counters = {};

const newCounterForm = document.getElementById('new-counter');
newCounterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const counterInput = document.getElementById('counter-input');
  if (counterInput.value === '') return;
  for (let key in counters) {
    if (counterInput.value === key) return;
  }
  counters[counterInput.value] = 0;

  counterInput.value = '';

  console.log(counters);
})