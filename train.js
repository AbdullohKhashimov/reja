// Task D:
/*D-TASK: 

Shunday function tuzing, u 2ta string parametr ega bolsin, 
hamda agar har ikkala string bir hil harflardan iborat
 bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
*/

const checkContent = (a, b) => {
  const arr = b.split("");
  const new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    if (a.length === arr.length && a.includes(arr[i])) {
      count++;
    }
    new_arr.push(count);
  }
  if (new_arr.includes(0)) {
    return false;
  } else {
    return true;
  }
};

const result = checkContent("mitgroup", "groupmti");
console.log(result);

// Task C:
//Shunday class tuzing nomi Shop va uni constructoriga 3 hil mahsulot pass bolsin,
// hamda classning 3 ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method
// ishga tushgan vaqt ham log qilinsin.
// Masalan: const shop = new Shop(4,5,2) shop.qoldiq() return hozir 20:40 4ta non, 5ta lagmon
// va 2ta cola mavjud! shop.sotish("non", 3) & shop.qabul("cola", 4) & shop.qoldiq() return hozir 20:50 ta 1ta non va 5 ta lagmon va 6ta cola mavjud

/* let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
minute = minute < 10 ? "0" + minute : minute;

class Shop {
  constructor(lagmon, non, cola) {
    this.lagmon = lagmon;
    this.non = non;
    this.cola = cola;
  }

  sotish(items, amount) {
    // lagmon
    if (items === "lagmon") {
      if (this.lagmon >= amount) {
        this.lagmon -= amount;
      }
    }

    // non
    if (items === "non") {
      if (this.non >= amount) {
        this.non -= amount;
      }
    }

    // cola

    if (items === "cola") {
      if (this.cola >= amount) {
        this.cola -= amount;
      }
    }

    return `hozir ${hour}:${minute} da ${this.lagmon} ta lagmon, ${this.non} ta non va ${this.cola} ta cola bor holos!`;
  }

  qabul(items, amount) {
    // lagmon
    if (items === "lagmon") {
      this.lagmon += amount;
    }

    // non
    if (items === "non") {
      this.non += amount;
    }

    // cola
    if (items === "cola") {
      this.cola += amount;
    }
    return `hozir ${hour}:${minute} da ${this.lagmon} ta lagmon, ${this.non} ta non va ${this.cola} ta cola bor holos!`;
  }

  qoldiq() {
    return `hozir ${hour}:${minute} da ${this.lagmon} ta lagmon, ${this.non} ta non va ${this.cola} ta cola qolgan!`;
  }
}

const trade = new Shop(6, 2, 4);
console.log(trade.sotish("cola", 2));
console.log(trade.qabul("non", 2));
*/

// Task B:
//Shunday function tuzing, u 1ta string parametrga ega bolsin,
//hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
//MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

// function count_digits(str) {
//   let count = 0;
//   for (let n of str) {
//     if (n >= "0" && n <= "9") {
//       count++;
//     }
//   }
//   return count;
// }

// const result = count_digits("ah98mad7al3ie1v");
// console.log(result);

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
