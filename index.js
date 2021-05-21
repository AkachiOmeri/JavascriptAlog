//Task 1
function convertFahrToCelsius(a) {

 let celsius;
 let fahr = Number(a);

  if (typeof a !== "boolean" && !isNaN(fahr)) {
    celsius = ((fahr - 32) * 5/9).toFixed(4);
 } else if (Array.isArray(a)) {
    celsius = `${JSON.stringify(a)} is not a valid number but a/an array`
 } else {
    celsius = `${JSON.stringify(a)} is not a valid number but a/an ${typeof a}`
 }{
    console.log(celsius);
 return celsius;
   
}
}
convertFahrToCelsius(5); 
  

//Task 2
 checkYuGiOh = (answer) => {
  let answerArray = [];
  let check = JSON.stringify(answer);

  if (isNaN(answer)|| answer === null || !parseInt(answer))  {
     console.log(`invalid parameter: ${check}`);
     return `invalid parameter: ${check}`;
  } else {
    for (let g = 1; g <= answer; g++) {
       if (g % 2 === 0 && g % 3 === 0 && g % 5 === 0) {
         answerArray.push("yu-gi-oh") 
       } else if (g % 2 === 0 && g % 3 === 0) {
        answerArray.push("yu-gi") 
       } else if (g % 3 === 0 && g % 5 === 0) {
        answerArray.push("gi-oh") 
       } else if (g % 2 === 0 && g % 5 === 0) {
        answerArray.push("yu-oh") 
       } else if (g % 2 === 0) {
        answerArray.push("yu")
       } else if (g % 3 === 0) {
        answerArray.push("gi")
       } else if (g % 5 === 0) {
        answerArray.push("oh")
       } else {
          answerArray.push(g) 
       } 
    } 
    console.log(answerArray)
    return answerArray 
  }
}
