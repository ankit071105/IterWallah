const morseCodeMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
    ' ': '/'
};

const textToMorse = (text) => {
    return text.toUpperCase().split('').map(char => morseCodeMap[char] || char).join(' ');
};

const inputText = document.getElementById('inputText');
const outputMorse = document.getElementById('outputMorse');

inputText.addEventListener('input', () => {
    const inputValue = inputText.value.trim();
    outputMorse.value = textToMorse(inputValue);
});