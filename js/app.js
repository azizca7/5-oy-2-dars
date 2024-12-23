//  ============ 1. Funksiya uchun xato tashlash
//  Funksiya yozing, u berilgan sonni factorialini hisoblaydi. Agar funksiyaga musbat son emas (masalan, manfiy son yoki satr) uzatilsa, throw yordamida xato tashlash kerak. Xato xabarida quyidagi mazmun bo‘lishi kerak: ============

// function factorial(son) {
//   if (typeof son !== "number" || son < 0) {
//     throw new Error("factorialni hisoblash uchun musbat son kerak!");
//   }
//   let res = 1;
//   for (let i = 1; i <= son; i++) {
//     res *= i;
//   }
//   return res;
// }

// try {
//   let res = factorial(+prompt());
//   console.log(res);
// } catch (xato) {
//   console.log(xato.message);
// }

// ============ 2. Array bilan ishlashda xatolarni boshqarish
// Shart:
//  Funksiya yozing, u massiv ichidagi sonlarning o‘rtacha qiymatini hisoblaydi. Funksiyada quyidagi holatlar uchun xatolarni tutish kerak:
// Agar funksiya argument sifatida massiv qabul qilmasa yoki undefined bo‘lsa, xato tashlash kerak:
// Xato xabari: "Massiv uzatilmadi!".
// Agar massivda hech bo‘lmaganda bitta element son bo‘lmasa, xato tashlash kerak:
// Xato xabari: "Massivda faqat sonlar bo‘lishi kerak!".
// Xato yuz berganda try...catch orqali "Xato yuz berdi: xato haqida xabar" deb konsolga chiqaring.

// function averageValue(arr) {
//   if (!Array.isArray(arr)) {
//     throw new Error("massiv uzatilmadi!");
//   }
//   if (!arr.some((element) => typeof element === "number")) {
//     throw new Error("massivda 1ta bolsa ham son bo'lishi kerak!");
//   }

//   let sum = 0;
//   let count = 0;
//   arr.forEach((value) => {
//     if (typeof value == "number") {
//       sum += value;
//       count++;
//     }
//   });

//   return sum / count;
// }

// try {
//   console.log(averageValue([1, 2, 3, 4, 5]));
//   console.log(averageValue([2, 1, 3, "c"]));
// } catch (xato) {
//   console.log(`Xato yuz berdi: ${xato.message}`);
// }

//  ================ O‘z xatolik funksiyasini yaratish ================
// Shart:
// Funksiya yozing, u ikki sonni bo‘lishni bajaradi.
// Agar bo‘luvchi 0 bo‘lsa, CustomError yordamida "Bo‘luvchi nolga teng bo‘lmasligi kerak" deb xato tashlang.
// Agar argumentlardan biri son bo‘lmasa, "Ikkala argument ham son bo‘lishi kerak" deb xato tashlang.
// Funksiyani try...catch orqali chaqiring:
// Xato yuz bersa, console.error orqali xato xabarini va xato kodini chiqarish kerak.
// Xato bo‘lmasa, natijani qaytaring.

// function divide(a, b) {
//   if (typeof a != "number" || typeof b != "number" || b == 0) {
//     throw new Error("ikkalasi ham son bo'lishi shart");
//   }
//   return a / b;
// }

// try {
//   console.log(divide(4, 0));

//   console.log(typeof NaN);
// } catch (error) {}

// ================ Massivlarga oid masalalar ================

// 1-misol:

// Funksiya yozing, massivdagi barcha juft sonlarni topib, ularning yig‘indisini qaytaruvchi.

// import { task1 } from ".functions.js";

// let num = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(task1(num));

// 2-misol:

// Funksiya yozing, massivdan faqat toq sonlarni olib tashlaydigan va yangi massiv qaytaradigan.

// import { task2 } from "./function.js";

// let num = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(task2(num));

// 4-misol:

// Funksiya yozing, massivdagi eng katta va eng kichik sonlar o‘rtasidagi farqni topadigan.

// import { task4 } from "./function.js";

// let num = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(task4(num));

// 5-misol:

// Funksiya yozing, massivning barcha elementlarini o‘zgartirmasdan teskari tartibda qaytaradigan.

// import { task5 } from "./function.js";

// let num = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(task5(num));

// 6-misol:

// Funksiya yozing, massivdan berilgan qiymatning nechta marta uchrashganini topadigan.

// import { task6 } from "./function.js";

// let num = [2, 3, 4, 3, 8, 10, 5, 6, 7, 8, 9, 10];
// let value = 10;

// let count = task6(num, value);
// console.log(`${value} soni ${count} mata qatnashagan `);

// 7-misol:

// Funksiya yozing, massivdagi barcha satr elementlarini uzunligi bo‘yicha o‘sish tartibida tartiblash uchun.

// import { task7 } from "./function.js";

// let text = ["olma", "ananas", "nok"];

// console.log(task7(text));

// 8-misol:

// Funksiya yozing, massivni ikki qismga bo‘lib, yangi massiv yaratadigan (birinchi yarmi va ikkinchi yarmi alohida massivlarda).b

// import {task8} from "./function.js"

// let text1 = ["non", "kon", "olma", "nok"]

// console.log(task8(text1));

// 9-misol:

// import { task9 } from "./function.js";

// let num = [2, 3, 4, 5, -6, 7, 8, -9, -123];

// console.log(task9(num));

// 10-misol:

// Funksiya yozing, massiv ichidagi sonlarning o‘rtacha qiymatini hisoblab beradigan.

// import { task10 } from "./function.js";

// let num = [2, 3, 4, 5, 6, 7, 8, 9, ];

// console.log(task10(num));

// 12-misol:

// Funksiya yozing, massiv ichidagi satr elementlarning birinchi harfini katta harfga aylantiradigan.

// import { task12 } from "./function.js";

// let text = ["apelsin"]

// console.log(task12(text));

// 13-misol:

// Funksiya yozing, massivdan eng uzun va eng qisqa satrlarni topib, yangi massiv qaytaradigan.

// import {task13} from "./function.js"

// let text1 = ["ananas", "kon", "olma", "nok"]

// console.log(task13(text1));

// 14-misol:

// Funksiya yozing, massivdagi barcha elementlarni stringga aylantiruvchi (raqamlar uchun).

// import { task14 } from "./function.js";

// let num = [1, 3, 5, 6, 7, 8, 9, 90]

// console.log(task14(num));

// 15-misol:

// Funksiya yozing, satr ichidagi barcha so‘zlarni o‘zaro joyini almashtiradigan.

// import { task15 } from "./function.js";

// let text = "hello world!";

// console.log(task15(text));

// 16-misol:

// Funksiya yozing, satr ichidagi so‘zlarni uzunligi bo‘yicha tartiblaydigan.

// import { task16 } from "./function.js";

// let text = "apelsin";

// console.log(task16(text));

// 17-misol:

// Funksiya yozing, satr ichida ma’lum bir so‘z necha marta takrorlanganini aniqlaydigan.

// import { task17 } from "./function.js";

// let text = "apelsin";

// console.log(task17(text));

// 18-misol:

// Funksiya yozing, satr ichidagi barcha kichik harflarni katta harfga aylantiradigan va aksincha.

// import { task18 } from "./function.js";

// let text = "apelsin";

// console.log(task18(text));

// 19-misol:

// Funksiya yozing, satrdagi barcha raqamlarni yig‘indisini hisoblaydigan.

// import { task19 } from "./function.js";

// let text = "1, 2, 3, 4, 5"

// console.log(task19(text));

// 20-misol:

// Funksiya yozing, satrdan faqat unikal harflarni qoldiradigan va takroriylarini olib tashlaydigan.

// import { task20 } from "./function.js";

// let text = "apelsin";

// console.log(task20(text));

// 21-misol:

// Funksiya yozing, satrdan barcha belgilarni o‘z o‘rniga teskari tartibda chiqaradigan.

// import { task21 } from "./function.js";

// let text = "apelsin";

// console.log(task21(text));

// 22-misol:

// import { task22 } from "./function.js";

// let text = "apelsin";

// console.log(task22(text));

// 23-misol:

// import { task23 } from "./function.js";

// let text = ["apelsin", "banana"];

// console.log(task23(text));

// 24-misol:

// Funksiya yozing, massiv ichidagi satrlardan uzunligi bo‘yicha eng katta bo‘lganini qaytaradigan.

// import { task24 } from "./function.js";

// let text = ["banana", "apelsin"];

// console.log(task24(text));

// 25-misol:

// Funksiya yozing, massiv ichidagi har bir elementni teskari qilib, yangi massiv qaytaradigan.

// import { task25 } from "./function.js";

// let text = ["banana", "apelsin"];

// console.log(task25(text));

// 26-misol:

// Funksiya yozing, satr ichidagi barcha takrorlanmagan so‘zlarni ajratib, massivga joylashtiradigan.

// import { task26 } from "./function.js";

// let text = ["banan", "olma", "nok", "nok", "kon"];

// console.log(task26(text));
