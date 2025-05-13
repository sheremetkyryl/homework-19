const colorRadios = document.querySelectorAll('input[name="color"]');

colorRadios.forEach((radio) => {
  radio.addEventListener('change', (event) => {
    document.body.style.backgroundColor = event.target.value;
  });
});