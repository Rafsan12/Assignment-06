function scopeTest() {
  if (true) {
    var varVariable = "I am var";
    let letVariable = "I am let";
    const constVariable = "I am const";
  }
  console.log(varVariable);
  console.log(letVariable);
  console.log(constVariable);
}

scopeTest();

/* all of three answer will be a ReferenceError. 
As we know var function scope and let and const block scope.
 We console.log() after block.Below are current one-

 */

function scopeTest() {
  if (true) {
    var varVariable = "I am var";
    let letVariable = "I am let";
    const constVariable = "I am const";
    console.log(varVariable);
    console.log(letVariable);
    console.log(constVariable);
  }
}

scopeTest();

/*now we see see out like 
I am var
I am let
I am const

*/

/*
you can find more information my notes here: 
https://deeply-lemonade-a2e.notion.site/Scope-and-Scope-36d65d5ccf8948a0a3766de82602b709?pvs=4

*/
