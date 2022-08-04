class Person {
    // attributes are by default private
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    // creating methods
    Show(): void {
        console.log(this.name + " " + this.age)
    }
}