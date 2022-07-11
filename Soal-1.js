var data1 = [1, 1, 1, 2, 2, 4, 1, 1];
var data2 = [2, 1, 2, 2, 2, 8, 1, 1];
var data3 = [3, 3, 3, 3, 2, 4, 1, 1];

let modus = {};
let maxNumberInModus = 0;

function getModus(dataArray) {
  let modus = {};

  dataArray.forEach((item) => {
    if (!modus[item]) {
      modus[item] = 1;
    } else {
      modus[item] += 1;
    }
  });

  return modus;
}

function getFinalResult(dataArray, maxCount) {
  const modus = getModus(dataArray);
  let keyNumber, valueNumber;

  for (const number in modus) {
    valueNumber = modus[number];

    if (valueNumber > maxCount) {
      keyNumber = number;
      maxCount = valueNumber;
    }
  }

  console.log(`Total data paling banyak keluar adalah ${keyNumber} dengan jumlah ${maxCount}
  `);
}

getFinalResult(data1, maxNumberInModus);
getFinalResult(data2, maxNumberInModus);
getFinalResult(data3, maxNumberInModus);