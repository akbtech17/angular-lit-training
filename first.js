var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // creating methods
    Person.prototype.Show = function () {
        console.log(this.name + " " + this.age);
    };
    return Person;
}());
var p1 = new Person('Tom', 29);
p1.Show();
