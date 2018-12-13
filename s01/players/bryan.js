// //swift 4.2
// import Foundation
// enum Words: Int, CaseIterable {
//     case fizz = 3
//     case buzz = 5
//     case hiss = 7
//     case howl = 11
// }
// let numbers = Words.allCases.map { $0.rawValue }
// func fizzMe(_ number:Int) -> String {
//     var fizzbuzzhisshowl = ""
//     for nbr in numbers {
//         fizzbuzzhisshowl += number%nbr == 0 ? "\(Words.init(rawValue: nbr)!)" : ""
//     }
//     return fizzbuzzhisshowl.isEmpty ? "\(number)" : fizzbuzzhisshowl
// }

const words = {
  3: "fizz",
  5: "buzz",
  7: "hiss",
  11: "howl"
};
const numbers = Object.keys(words);
export function bryan(number) {
  let fizzbuzzhisshowl = "";
  for (let nbr of numbers) {
    fizzbuzzhisshowl += number % nbr == 0 ? words[nbr] : "";
  }
  return fizzbuzzhisshowl === "" ? number : fizzbuzzhisshowl;
}
