// Завдання 1

// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].

// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

// const logItems = function (array) {

//     for(let i = 0;i < array.length;i += 1){
//         console.log(`${i + 1} - ${array[i]}`);
//     } 

// };


// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// Завдання 2

// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord)
//  приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

// let calculateEngravingPrice = function(message, pricePerWord){
//     const words = message.split(' ');
//     const numberOfWords = words.length;
//     const totalPrice = numberOfWords * pricePerWord;
//     return totalPrice;

    
// }

// console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       10,
//     ),
//   );

//Завдання 3

// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.


// const findLongestWord = function (string) {
//   const words = string.split(' ');
//   let longestWord = '';
//   for(const word of words){
//     if (word.length > longestWord.length){
//         longestWord = word;
//     }
//   }
//   return longestWord
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));


// Завдання 4

// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.

// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

// const formatString = function (string) {

//     const maxLength = 40;
//     if(string.length <= maxLength){
//         return string;
//     } else{
//         return string.slice(0, maxLength) + '...';
//     }
// };

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));


// Завдання 5


// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam
//  і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

// const checkForSpam = function (message) {
//     const lowerCaseMessage = message.toLowerCase();
//     return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
// };

// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('Get best sale offers now!'));

// Завдання 6


// Напиши скрипт з наступним функціоналом:


// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total.
//  Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.


// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів,
//  не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число,
//   попробуйте ще раз', при цьому результат promptзаписувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.



let input;
let numbers = [];
let total = 0;
while (true) {
    input = prompt('Введіть число');
    if (input === null) {
        break; 
      }
      const parsedInput = Number(input);
      if (isNaN(parsedInput)) {
        alert('Було введено не число, спробуйте ще раз');
        continue;
      }
      numbers.push(parsedInput);
}

if(numbers.length > 0){
    for(const number of numbers){
        total += number;
    }
    console.log(`${total}. Total amount of numbers`);
    
}else{
    console.log(`Array is empty`);
    
}


