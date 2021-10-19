function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function () {
        return `${this.firstName} ${this.lastName}`; // tra ve ten
    }
}

var author = new User('Hieu', 'Hulk', 'avatar'); // khai bao chuoi author
var user = new User('Konan', 'dev', 'avatar'); // khai bao chuoi user

author.title = 'Chia se tao FB'; // them title vafo chuoi author
user.comment = 'Hihi'; // them comment vao chuoi user

console.log(author.getName());
console.log(user.getName());