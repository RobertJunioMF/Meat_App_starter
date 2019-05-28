"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined && another.email === this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "angela@gmail.com": new User('angela@gmail.com', 'Angela', '123'),
    "evangeline@gmail.com": new User('evangeline@gmail.com', 'Evangeline', '123')
};
