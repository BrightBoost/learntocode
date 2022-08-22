class User {
  constructor(x, y) {
    this.username = x;
    this.email = y;
    this.something = 42;
  }
}

let user = new User("John", "john@john.com");
console.log(user);

let user2 = new User("Nathan", "nathan@nathan.com");
console.log(user2);
console.log(typeof User);
