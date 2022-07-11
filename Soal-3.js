let space = " ";
let asterisk = "*";

function Output1_Solution1() {
  let result = "";
  let k = 6;

  for (let row = 1; row <= k; row++) {
    for (let column = 0; column < row; column++) {
      result += "*";
    }
    result += "\n";
  }

  console.log(result);
}


function Output2_Solution1() {
  let result = "";
  let k = 5;

  for (let column = 1; column <= k; column++) {
    for (let charSpace = 0; charSpace < k - column; charSpace++) {
      result += " ";
    }

    for (let charAsterisk = 0; charAsterisk < column; charAsterisk++) {
      result += "*";
    }

    result += "\n";
  }
  
  console.log(result);
}

Output1_Solution1();
Output2_Solution1();

// Another Approach

/*
function Output1_Solution2() {
  let result = "";
  let k = 6;

  for (let column = 1; column <= k; column++) {
    result += asterisk.repeat(column);
    result += "\n";
  }

  console.log(result);
}

function Output2_Solution2() {
  let result = "";
  let k = 5;

  for (let column = 1; column <= k; column++) {
    result += space.repeat(k - column);
    result += asterisk.repeat(column);
    result += "\n";
  }

  console.log(result);
}


Output1_Solution2();
Output2_Solution2();
*/