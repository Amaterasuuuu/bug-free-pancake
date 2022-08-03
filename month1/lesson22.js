// let a = 10
// let b = a
// console.log(a, b)

// a = 20
// console.log(a, b)

// b = 30
// console.log(a, b)



// const numbers1 = [1, 2, 3, 4, 5]
// const numbers2 = numbers1

// numbers2.push(6, 7)

// console.log(numbers1, numbers2)



// const obj1 = {
//     a: 10,
//     b: 20,
//     sum: function() { this.a + this.b }
// }
// const obj2 = obj1


// // correct way to copy object
// const obj3 = JSON.parse(JSON.stringify(obj1))


// obj2.b = 200
// obj1.c = 500

// console.log(obj1, obj2, obj3)





// class Figure {
//     constructor(length) {
//         this.length = length
//     }

//     findP = function() {}
// }

// class Circle extends Figure {
//     constructor(radius) {
//         const diameter = radius * 2
//         const length = diameter * 3.14
//         super(length)
//         this.radius = radius
//         this.diameter = diameter
//     }

//     findP = function() {
//         return this.length
//     }
// }

// class Square extends Figure {
//     constructor(length) {
//         super(length)
//     }

//     findP = function() {
//         return this.length * 4
//     }
// }

// const circle = new Circle(5)
// console.log(circle)
// console.log(circle.findP())


// const square = new Square(25)
// console.log(square)
// console.log(square.findP())


// prijoly javascripta
// console.log(0.1 + 0.2)
// console.log(0.1 + 0.7)

// console.log(('b' + 'a' + +'a' + 'a').toLowerCase())




class Developer {
    #salary
    constructor(position, skills, salary) {
        this.position = position
        this.skills = skills
        this.#salary = salary
    }

    getSalary() {
        return this.#salary
    }

    setSalary(newSalary) {
        this.#salary = newSalary
    }

    promotion = function() {
        this.position = 'Senior'
        this.setSalary('9000$')
    }
}

const frontend = new Developer('Middle', ['JavaScript', 'React'], '800$')
console.log(frontend)
console.log(frontend.getSalary())

frontend.promotion()

// frontend.setSalary('900$')
console.log(frontend)
console.log(frontend.getSalary())

