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

class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  login() {
    console.log(this.email, "just logged in");
  }
  logout() {
    console.log(this.email, "just logged out");
  }
}

var userOne = new User("melek@gmail.com", "malik");
var userTwo = new User("mahdi@gmail", "mahdi");

console.log(userOne, userTwo);

userOne.login();
userOne.logout();
