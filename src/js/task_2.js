const textInput = document.getElementById('name-input');
const output = document.getElementById('name-output');

textInput.addEventListener('input', (event) => { 
  const text = event.target.value
  output.textContent = text;
});

const input = document.getElementById("validation-input");
input.addEventListener("blur", () => {
    const expectedLength = Number(input.dataset.length);
    const actualLength = input.value.length;
    input.classList.remove('valid', 'invalid');
    if (actualLength === expectedLength) {
        input.classList.add('valid');
    } else {
        input.classList.add('invalid')
    }
})