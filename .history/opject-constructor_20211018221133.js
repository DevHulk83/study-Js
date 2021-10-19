function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('Hieu', 'Hulk', 'avatar');
var user = new User('Konan', 'dev', 'avatar');

author.title = 'Chia se tao FB';
user.comment = 'Hihi';

console.log(author.getName());
console.log(user.getName());