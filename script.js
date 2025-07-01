const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const convertToArabic = (num) => {
  const arabDigits = {
    '0': '٠',
    '1': '١',
    '2': '٢',
    '3': '٣',
    '4': '٤',
    '5': '٥',
    '6': '٦',
    '7': '٧',
    '8': '٨',
    '9': '٩'
  };

  return String(num)
    .split('')
    .map(digit => arabDigits[digit] || digit)
    .join('');
};

convertBtn.addEventListener('click', () => {
  const input = document.getElementById('number').value.trim();
  
  if (input === '') {
    output.textContent = 'Masukkan angka terlebih dahulu!';
    output.classList.remove('hidden');
    return;
  }

  const converted = convertToArabic(input);
  output.textContent = `Angka Arab: ${converted}`;
  output.classList.remove('hidden');
});
