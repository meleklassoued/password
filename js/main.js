// const userOne = {
//   email: "melek@gmail.com",
//   Name: "melek",
//   login() {
//     console.log(this.Name);
//   },
//   logout() {
//     console.log(this.email);
//   },
// };
// console.log(userOne.Name);

// class User {
//   constructor(email, name) {
//     this.email = email;
//     this.name = name;
//     this.score = 0;
//   }
//   login() {
//     console.log(this.email, "just logged in");
//     return this;
//   }
//   logout() {
//     console.log(this.email, "just logged out");
//     return this;
//   }
//   updateScore() {
//     this.score++;
//     console.log(this.email, "score is now", this.score);
//     return this;
//   }
// }

// class Admin extends User {
//   deleteUser(user) {
//     users = users.filter((u) => {
//       return u.email != user.email;
//     });
//   }
// }

// var userOne = new User("melek@gmail.com", "malik");
// var userTwo = new User("mahdi@gmail", "mahdi");
// var projectManger = new Admin("nabil@gamil.com", "Nabil");
// // console.log(userOne, userTwo);

// userTwo.login().updateScore().logout();

// var users = [userOne, userTwo, projectManger];

// projectManger.deleteUser(projectManger);

// console.log(users);

// function User(email, name) {
//   this.email = email;
//   this.name = name;
//   this.online = false;
// }

// User.prototype.login = function () {
//   this.online = true;
//   console.log(this.email, "has loged in");
// };

// var userOne = new User("melek@gmail.com", "malik");
// var userTwo = new User("mahdi@gmail", "mahdi");

// console.log(userOne.login());
// console.log(userTwo.login());

// const stocks = {
//   fruits: ["strawberry", "bannana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let order = (fruit_name, call_production) => {
//   setTimeout(() => {
//     console.log(`${stocks.fruits[fruit_name]} was selected `);
//     call_production();
//   }, 2000);
// };

// let production = () => {
//   setTimeout(() => {
//     console.log("production starter");

//     setTimeout(() => {
//       console.log("the fruit has been chopped");
//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
//         setTimeout(() => {
//           console.log("the machine was started");
//           setTimeout(() => {
//             console.log(`iceCream was placed on ${stocks.holder[0]}`);

//             setTimeout(() => {
//               console.log(`${stocks.toppings[0]} was added `);
//               setTimeout(() => {
//                 console.log("serve the icec ream");
//               }, 0000),
//                 3000;
//             });
//           }, 2000);
//         }, 1000);
//         setTimeout(() => {
//           "the machine wasstarted";
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0000);
// };
// order(0, production);

const getTodos = async () => {
  const response = await fetch("/Todos/DATA.jsn");
  if (response.status !== 200) {
    throw new Error('cannot fetch the data ');
  }
  const data = await response.json();
  return data;
};

getTodos()
  .then((data) => console.log("resolved", data))
  .catch((err) => console.log("rejected nikomek", err.message));
