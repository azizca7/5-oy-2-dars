// export function task1(arr) {
//   return arr.filter((num) => num % 2 === 0).reduce((res, num) => res + num, 0);
// }

export function task2(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// export function task3(arr) {
//   return Math.max(...arr) - Math.min(...arr);
// }

// export function task4(arr) {
//   return [...arr].reverse();
// }

// export function task6(arr, value) {
//   return arr.filter((num) => num === value).length;
// }

// export function task7(arr) {
//   return arr.slice().sort((a, b) => a.length - b.length);
// }

// export function task8(arr) {
//   const num = Math.ceil(arr.length / 2);
//   return [arr.slice(0, num), arr.slice(num)];
// }

// export function task9(arr) {
//   return arr.filter((num) => num > 0);
// }

// export function task10(arr) {
//   const sum = arr.reduce((res, num) => res + num, 0);
//   return sum / arr.length;
// }

// export function task12(arr) {
//   return arr.map((text) => text.toUpperCase());
// }

// export function task13(arr) {
//   const min = arr.reduce((res, text) =>
//     text.length < res.length ? text : res
//   );
//   const max = arr.reduce((res, text) =>
//     text.length > res.length ? text : res
//   );
//   return [min, max];
// }

// export function task14(arr) {
//   return arr.map((num) => String(num));
// }

// export function task15(str) {
//   return str.split(" ").reverse().join(" ");
// }

// export function task16(str) {
//   return str
//     .split(" ")
//     .sort((a, b) => a.length - b.length)
//     .join(" ");
// }

// export function task17(str, word) {
//   return str.split(" ").filter((num) => num === word).length;
// }

// export function task18(str) {
//   return str
//     .split("")
//     .map((text) =>
//       text === text.toLowerCase() ? text.toUpperCase() : text.toLowerCase()
//     )
//     .join("");
// }

// export function task19(str) {
//   return (str.match(/\d/g) || []).reduce((res, num) => res + Number(num), 0);
// }

// export function task20(str) {
//   return str.split("").reverse().join("");
// }

// export function task21(str) {
//   return str
//     .split(" ")
//     .map((text) => text.charAt(0).toUpperCase() + text.slice(1))
//     .join(" ");
// }

// export function task22(str) {
//   return str.split(" ").sort();
// }

// export function task23(arr) {
//   return arr.join(" ");
// }

// export function task24(arr) {
//   return arr.reduce((res, text) => (text.length > res.length ? text : res));
// }

// export function task25(arr) {
//   return arr.map((text) => text.split("").reverse().join(""));
// }

// export function task26(str) {
//   const words = str.split(" ");
//   return words.filter((text, index, self) => self.indexOf(text) === index);
// }
