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
    this.score = 0;
  }
  login() {
    console.log(this.email, "just logged in");
    return this;
  }
  logout() {
    console.log(this.email, "just logged out");
    return this;
  }
  updateScore() {
    this.score++;
    console.log(this.email, "score is now", this.score);
    return this;
  }
}

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      return u.email != user.email;
    });
  }
}

var userOne = new User("melek@gmail.com", "malik");
var userTwo = new User("mahdi@gmail", "mahdi");
var projectManger = new Admin("nabil@gamil.com", "Nabil");
// console.log(userOne, userTwo);

userTwo.login().updateScore().logout();

var users = [userOne, userTwo, projectManger];

projectManger.deleteUser(projectManger);

console.log(users);
