const input1 = "hallo jesika24 selamat datang!"
const input2 = "hallo anggun selamat datang!"
const input3 = "hallo ** selamat datang!"
const input4 = "hallo Mariage889120! selamat datang!"



function getNumber(text) {
  let numInText = "";

  for (let i = 0; i < text.length; i++) {
    const currInput = text.charAt(i);

    // Checking is there space character
    if (currInput !== " ") {
      // Checking is the character a string or number
      if (!isNaN(currInput)) {
        numInText += currInput;
      }
    }
  }

  return numInText;
}

function finalResult(input) {
  const result = getNumber(input);

  if (!result) {
    console.log(`Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan ${input}`);
  } else {
    console.log(`Sistem kami menolak untuk inputan berisi angka ${result}`);
  }
}

finalResult(input1);
finalResult(input2);
finalResult(input3);
finalResult(input4);