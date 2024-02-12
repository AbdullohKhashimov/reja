// Task B
//Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
//MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

/**
 * A task:
 * Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan
 * qatnashgan sonini return qilib bersin.
 * Masalan: countLetter("e", "engineer") 3ni return qiladi
 */

// function count_letter(element, string) {
//   let count = 0; // a variable to store the count of occurences
//   for (let i = 0; i < string.length; i++) {
//     // condition to check if the character at the current position is equal to specific letter required!
//     if (string[i] === element) {
//       count++; // if true increment by 1
//     }
//   }
//   return count ? count : "there is no such alphabet";
// }
// console.log(count_letter("b", "bubble-bus"));
// console.log(count_letter("t", "engineer"));
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

// Callback functions
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

// Async function
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 2000);
//     });
// setTimeout(() => {
//   callback(null, list[5]);
// }, 5000);
//   }
// }
// console.log("passed here 0");

// // callback hell bu joyda biz then\catch ni ishlatdik.
// maslahatBering(35)
//   .then((data) => {
//     maslahatBering(55)
//       .then((data) => {
//         console.log("javob:", data);
//       })
//       .catch((err) => {
//         console.log("Error", err);
//       });
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

// // {"synchronous functionlar toliq ishga tushib bulmaguncha asynchronous function ishlamaydi"}

// async\await function call qismda
// async function run() {
//   let javob = await maslahatBering(30);
//   console.log(javob);
//   javob = await maslahatBering(65);
//   console.log(javob);
//   javob = await maslahatBering(45);
//   console.log(javob);
// }
// run();

// console.log("passed here 1"); // bu vaziyatda output asynchronous function oldinda print qiladi chunki bu synchronous.
