// Реализуйте класс Student (Студент), который будет наследовать от класса User . Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод, который будет изменять имя и фамилию студента.
class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;

    }

    // getFullName() {
    //     console.log(`${this.name }${this.surname}`)
    // }
}
class Student extends User {
    constructor(name, surname, year) {
        super(name, surname)
        this.year = year;

    }
    getFullName() {
        console.group()
        console.log(`Name: ${this.name}`);
        console.log(`surname:${this.surname}`);
        console.log(`uear:${this.year}`);
        console.groupEnd()
    }
    getAnotherName(newName, newSurname) {
        this.name = newName;
        this.surname = newSurname;
        // console.log();
    }
}

let newUser = new Student('vanya', 'kalun', 2013);
console.log(newUser);
newUser.getFullName();
newUser.getAnotherName('Vika', 'Mik')
console.log(newUser);

// let u1 = new User('vk', 'mik', 23)
// u1.getFullName()
// class Student extends User {
//     constructor(name, surname, year, newName, newSurname) {
//         this.name = surname,
//             this.surname = newSurname,


//     }
// }

// function piramida(n) {
//     let x = ''
//     for (let i = 0; i < n; i++) {
//         // x += '*'
//         console.log(x += '*')
//     }
// }
// piramida(8)
// function piramida(n) {
//     let x = ''
//     let y = ''
//     for (let i = 0; i < n; i++) {
//         // x += '*'
//         // console.log(x += '*')
//         for (let a = n; a > n - 1; a--) {
//             // y += (''*a)
//             console.log(y += ('' * a), x += '*');

//         }

//         // console.log(x += '*')
//     }
// }
// piramida(8)
let x = '*' + '*' + '*' + '*'
    // console.log((x));
for (let f = 4; f > 3; f--) {
    x -=
        console.log(x);
}