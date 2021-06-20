const members = [
  {
    name: "hello",
    password: "",
  },
  {
    name: "mourad",
    password: "",
  },
  {
    name: "3imed",
    password: "",
  },
  {
    name: "hay",
    password: "",
  },
  {
    name: "mahdi",
    password: "",
  },
  {
    name: "farah",
    password: "",
  },
  {
    name: "nabil",
    password: "",
  },
  {
    name: "mahboul",
    password: "",
  },
  {
    name: "fathi",
    password: "",
  },
  {
    name: "brahim",
    password: "",
  },
  {
    name: "montassar",
    password: "",
  },
  {
    name: "ghailene",
    password: "",
  },
];
const password = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "n",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "u",
  "v",
  "w",
];
let getrandomPassword = () => {
  return Math.floor(Math.random() * password.length);
};

let array = members.map((member) => {
  for (let i = 0; i < 15; i++) {
    member.password += password[getrandomPassword()];
    console.log(getrandomPassword());
  }
});

console.log(members);
// console.log(members);
