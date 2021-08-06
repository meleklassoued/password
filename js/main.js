const userOne = {
  email: "melek@gmail.com",
  Name: "melek",
  login() {
    console.log(this.Name);
  },
  logout() {
    console.log(this.email);
  },
};
console.log(userOne.Name);
