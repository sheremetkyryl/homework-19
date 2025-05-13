const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

text.style.fontSize = `${fontSizeControl.value}px`;

fontSizeControl.addEventListener('input', (event) => {
  const newSize = event.target.value;
  text.style.fontSize = newSize + 'px'
});

