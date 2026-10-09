// JavaScript is alleen nodig voor de twee kleine oefeningen. De uitleg werkt ook zonder.
function binaryToDecimal(bits) {
  return parseInt(bits, 2);
}

// Elke RGB-waarde krijgt twee hexadecimale cijfers: 0 wordt 00 en 255 wordt FF.
function rgbToHex(red, green, blue) {
  return '#' + [red, green, blue]
    .map(value => value.toString(16).padStart(2, '0'))
    .join('').toUpperCase();
}

if (typeof document !== 'undefined') {
  const bitButtons = document.querySelectorAll('.bit-button');
  const binaryOutput = document.querySelector('#binary-output');
  if (binaryOutput) {
    const updateBinary = () => {
      const bits = Array.from(bitButtons, button => button.textContent).join('');
      binaryOutput.textContent = bits;
      document.querySelector('#decimal-output').textContent = binaryToDecimal(bits);
    };
    // Een klik zet een bit aan of uit; aria-pressed vertelt hetzelfde aan een schermlezer.
    bitButtons.forEach(button => {
      button.addEventListener('click', () => {
        const enabled = button.getAttribute('aria-pressed') !== 'true';
        button.setAttribute('aria-pressed', String(enabled));
        button.textContent = enabled ? '1' : '0';
        updateBinary();
      });
    });
    updateBinary();
  }

  const red = document.querySelector('#red');
  if (red) {
    const green = document.querySelector('#green');
    const blue = document.querySelector('#blue');
    const updateColor = () => {
      const values = [red, green, blue].map(input => Number(input.value));
      [red, green, blue].forEach(input => {
        document.querySelector('#' + input.id + '-value').textContent = input.value;
      });
      const rgb = 'rgb(' + values.join(', ') + ')';
      document.querySelector('#color-preview').style.backgroundColor = rgb;
      document.querySelector('#rgb-output').textContent = rgb;
      document.querySelector('#hex-output').textContent = rgbToHex(...values);
    };
    [red, green, blue].forEach(input => input.addEventListener('input', updateColor));
    updateColor();
  }
}

// Node gebruikt dezelfde rekenfuncties voor de tests; in de browser is module niet aanwezig.
if (typeof module !== 'undefined') {
  module.exports = { binaryToDecimal, rgbToHex };
}
