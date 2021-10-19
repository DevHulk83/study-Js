function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.avatar = avatar;

    this.getName = function () {
        return `${this.firstName} ${this.lastName} ${age}`; // tra ve ten
    }
}

var author = new User('Hieu', 'Hulk', '19', 'avatar'); // khai bao chuoi author
var user = new User('Konan', 'dev','20', 'avatar'); // khai bao chuoi user

author.title = 'Chia se tao FB'; // them title vafo chuoi author
user.comment = 'Hihi'; // them comment vao chuoi user

console.log(author.getName());
console.log(user.getName());