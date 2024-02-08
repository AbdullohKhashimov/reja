/**
 * A task:
 * Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan
 * qatnashgan sonini return qilib bersin.
 * Masalan: countLetter("e", "engineer") 3ni return qiladi
 */

function count_letter(element, string) {
  let count = 0; // a variable to store the count of occurences
  for (let i = 0; i < string.length; i++) {
    // condition to check if the character at the current position is equal to specific letter required!
    if (string[i] === element) {
      count++; // if true increment by 1
    }
  }
  return count;
}
console.log(count_letter("b", "bubble-bus"));
console.log(count_letter("e", "engineer"));
// charAt() = a method that returns the character at a specified index (position) in a string.

// console.log("Jack Ma maslahatlari");

// const list = [
//   "yaxshi talaba boling", //0-20
//   "togri boshliq tanlang va koproq hato qiling", // 20-30
//   "uzingiz uchun ishlashni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya kiriting", // 50-60
//   "endi dam oling baribir foydasi yoq", //60
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(() => {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }
// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("error:", err);
//   else {
//     console.log("answer:", data);
//   }
// });

// console.log("passed here 1");
