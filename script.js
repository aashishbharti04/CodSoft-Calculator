let displayValue = '';

function updateDisplay() {
  document.getElementById('display').textContent = displayValue || '0';
}

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (displayValue === '' && operator !== '-') return;
  if (['+', '-', '*', '/'].includes(displayValue.slice(-1))) return;
  displayValue += operator;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch {
    displayValue = 'Error';
  }
  updateDisplay();
}
