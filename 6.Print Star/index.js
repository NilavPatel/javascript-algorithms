// Print below lines:
// *
// **
// ***
// ****
// *****

function printStar() {
  for (var i = 1; i <= 5; i++) {
    let str = "";
    for (var j = 1; j <= i; j++) {
      str = str + "*";
    }
    console.log(str);
  }
}

printStar();

// Print below lines:
//     *
//    **
//   ***
//  ****
// *****

function printStar2() {
  for (var i = 1; i <= 5; i++) {
    let str = "";
    for (var j = 1; j <= 5 - i; j++) {
      str = str + " ";
    }
    for (var j = 1; j <= i; j++) {
      str = str + "*";
    }
    console.log(str);
  }
}

printStar2();

// Print below lines:
//     *
//    ***
//   *****
//  *******
// *********

function printStar3() {
  for (var i = 1; i <= 5; i++) {
    let str = "";
    for (var j = 1; j <= 5 - i; j++) {
      str = str + " ";
    }
    for (var j = 1; j <= i; j++) {
      str = str + "*";
    }
    for (var k = 1; k < i; k++) {
      str = str + "*";
    }
    console.log(str);
  }
}

printStar3();
