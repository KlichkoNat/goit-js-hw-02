//Поиск самого длинного слово в строке с пробелами

//Напиши функцию findLongestWord(string = ""),
//которая принимает параметром произвольную строку(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

function findLongestWord(string = "") {
  let str = string.split(" ");
  let lengthWorldLongest = 0;
  let lengthWorld = "";
  for (let i = 0; i < str.length; i += 1) {
    if (str[i].length > lengthWorldLongest) {
      lengthWorldLongest = str[i].length;
      lengthWorld = str[i];
    }
  }
  return lengthWorld;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
