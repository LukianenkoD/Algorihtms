
// 1.  1 уровень сложности: Напишите рекурсивную функцию , которая принимает положительное целое число n в качестве аргумента и возвращает сумму всех чисел от 1 до n.
// function numberSum(number){
//     let sum = 0;
//     for(let i =0; i<=number;i++){
//         sum = sum +i;

//     }
//     return console.log(sum);
// }
// numberSum(7);
function numberRec(number){
    if(number<0){
        return "The number do not positive"
    }else if(number===0){
        return number;
    }else if(number===1){
        return number
    }
        return numberRec(number-1) + number
    
}
console.log(numberRec(6));

// 2. Напишите рекурсивную функцию , которая принимает строку и возвращает ее перевернутой.

// function stringTurnOver(string){
//     let arrayString = string.split('');
//     let newArrayString = [];
//     for(let i = arrayString.length-1; i>=0; i--){
//         newArrayString.push(arrayString[i]);
//     }
//     let newString = newArrayString.join('');
//     console.log(newString)

// }
// stringTurnOver("Dima");

function stringTurnOver(string){
if(string.length === 0){
    return "Empty string";
    }else if(string.length-1){
    return stringTurnOver(string.slice(1))+string[0];
    
}
return string
}
console.log(stringTurnOver("Dima"));

// 3.Напишите рекурсивную функцию, которая генерирует все перестановки заданной строки. Например, для строки "abc" функция должна вывести все возможные перестановки: "abc", "acb", "bac", "bca", "cab", "cba".

function combine(str) {
    if (!str.length) {
      return;
    }
    function findNext(combination) {
      const comb = [...combination];
      const n = comb.length - 1;
      let i = n - 1;
      while (comb[i] >= comb[i + 1]) {
        i--;
      }
      if (i == -1) {
        return false;
      }
      let l = n;
      while (comb[i] >= comb[l]) {
        l--;
      }
      [comb[l], comb[i]] = [comb[i], comb[l]];
      let j = i + 1,
        k = n;
      while (j < k) {
        [comb[k], comb[j]] = [comb[j], comb[k]];
        j++;
        k--;
      }
      return comb;
    }
    const res = [];
    res.push(str.split(''));
   
    while (findNext(res[res.length - 1])) {
     res.push(findNext(res[res.length - 1]));
    }
   
    return res;
  }
  console.log(combine("abc"));