// A task
// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// masalani yechimi:

// function countLetter(harf, soz) {
//     let counter = 0;

//     for(let a = 0; a < soz.length; a++) {
//         if (soz[a] === harf) {
//             counter++;
//         }
//     }
//     return counter;
// };

// let result = countLetter("a", "alphabet");
// console.log(`The result is: ${result}`);

///////////////////////////////////

//TASK B

// Shunday, function tuzingki, bu function yagona parametrga ega bo'lib
// string tarkibidagi sonlar miqdorini qaytarsin

// Masalan: countDigits("ad2a54y79wet0sfgb9")
// Yuqoridagi string tarkibida 7 dona raqam qatnashganligi uchun, natija 7 qaytadi

//masalani yechimi:
// function countDigits(word) {
//   let counter = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] >= "0" && word[i] <= "9") {
//       counter++;
//     }
//   }
//   return counter;
// }

// let result = countDigits("ad2a54y79wet0sfgb9");
// console.log(`The result is: ${result}`);

// Task C

//Shop nomli class tuzing, va bu class 3 xill parametr qabul qilsin.
// Hamda classning quyidagdek 3'ta metodi bo'lsin:

// 1) qoldiq
// 2) sotish
// 3) qabul

// Har bir metod ishga tushgan vaqtda log qilinsin

// MASALAN:
// const shop = new Shop(4, 5, 2)

// shop.qoldiq();
// natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud

// shop.sotish("non", 3); & shop.qabul("cola", 4); & shop.qoldiq();
// Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud!

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   getVaqt() {
//     const now = new Date();
//     const soat = now.getHours();
//     const daqiqa = now.getMinutes();
//     return `${soat}:${daqiqa}`; // faqat soat va minutni korsatush un
//   }

//   qoldiq() {
//     const vaqt = this.getVaqt(); // shopdan chaqirib olamiz
//     console.log(
//       `${vaqt} da ${this.non} ta non, ${this.lagmon} ta lagmon, ${this.cola} ta cola bor`,
//     );
//   }

//   sotish(mahsulot, miqdor) {
//     const vaqt = this.getVaqt();
//     if (mahsulot === "non") {
//       this.non -= miqdor;
//     } else if (mahsulot === "lagmon") {
//       this.lagmon -= miqdor;
//     } else if (mahsulot === "cola") {
//       this.cola -= miqdor;
//     }

//     console.log(`${vaqt} da ${miqdor} ta ${mahsulot} sotildi`);
//   }

//   qabul(mahsulot, miqdor) {
//     const vaqt = this.getVaqt();
//     if (mahsulot === "non") {
//       this.non += miqdor;
//     } else if (mahsulot === "lagmon") {
//       this.lagmon += miqdor;
//     } else if (mahsulot === "cola") {
//       this.cola += miqdor;
//     }
//     console.log(`${vaqt} da ${miqdor} ta ${mahsulot} qo'shildi`);
//   }
// }

// const shop = new Shop(4, 5, 6);
// shop.qoldiq();
// shop.sotish("non", 2);
// shop.qabul("lagmon", 3);
// shop.qoldiq();

// TASK D

// Ikkita parametra ega function tuzing, va functioning berilgan birinchi va ikkinchi parametr qiymatlari o'zaro to'liq mos kelsa true qiymat qaytarsin.

// Masalan: checkContent("mitgroup", "gmtiprou") return true

// Masalani yechimi

// function checkContent(string1, string2) {
//   if (string1.length !== string2.length) {
//     return false;
//   }
//   //agar berilgan 2ta stringni uzunligi togri bomasa tekshirib o'tirsh kerak emas shu un birinchi lengthni solishtiramiz
//   const firstWord = string1.split("").sort().join("");
//   const secondWord = string2.split("").sort().join("");
//   return firstWord === secondWord;
// }

// console.log(checkContent("mitgroup", "gmtiprou")); // true
// console.log(checkContent("temur", "rumte"));
// console.log(checkContent("ferrari", "iraerfa"));

// TASK E

// Shunday function tuzing, u bitta string argumentini qabul qilib, qabul qilingan stringni teskari ko'rinishda return qilsin.

// Masalan: getReverse("hello") return "olleh"

// masalani yechimi:


function getReverse(string) {
  return string.split("").reverse().join("");
}

let result = getReverse("Temur");
console.log(result);

///////////////////////////////////
// callback functions /////
// console.log("Jack Ma maslahatlari");

// const list = [
//   "yaxshi talaba boling", // 0–20
//   "togri boshliq tanlang va koproq hato qiling", // 20–30
//   "uzingizga ishlashingizni boshlang", // 30–40
//   "siz kuchli bolgan narsalarni qiling", // 40–50
//   "yoshlarga investitsiya qiling", // 50–60
//   "endi dam oling, foydasi yoq endi", // 60
// ];

//async functions
// async function maslahatBering(a) {
//     if(typeof a !== 'number') throw new Error("insert a number");
//     else if(a < 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//         }, 5000);
//         })
//     }
// }

//callback functions
// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("insert a number", null);
//     else if(a < 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(function (){
//             callback(null, list[5]);
//         }, 1000);
//     }
// }

//   maslahatBering(67, (err, data) => {
//      if(err) console.log('ERROR:', err);
//      else {
//          console.log('javob:', data);
//         }
//     });

// call via then/catch
//  console.log('passed here 0');
//   maslahatBering(65)
//   .then(data => {
//     console.log('javob:', data);
//   })
//   .catch(err => {
//     console.log('ERROR:', err);
//   })
// console.log('passed here 1');

// call via async/await
// async function run() {
//     let javob = await maslahatBering(25);
//     console.log(javob);
//     javob = await maslahatBering(71);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();
