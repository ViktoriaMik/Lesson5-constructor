// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// function Element(tag, action, arr) {
//     this.tag = tag;
//     this.action = action;
//     this.arr = arr;
// }
// // ___________________________
// //

// let aEl = {
//     element: '<a>',
//     aAction: 'является одним из важных элементов HTML и предназначен для создания ссылок.',
//     aArr: [{
//             tag: 'Задает адрес документа, на который следует перейти.',
//             describe: 'Задает адрес документа, на который следует перейти.',
//         },
//         {
//             tag: 'target',
//             describe: 'Имя окна или фрейма, куда браузер будет загружать документ.'
//         }
//     ]
// }
// let aElement = new Element(aEl.element, aEl.aAction, aEl.aArr)
// console.log(aElement)
//     // ___________________________
// let divEl = {
//     element: '<div>',
//     divAction: 'является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',
//     divArr ; [{
//             tag: 'align',
//             describe: 'Задает выравнивание содержимого тега <div>.',
//         },
//         {
//             tag: 'title',
//             describe: 'Добавляет всплывающую подсказку к содержимому.',
//         }
//     ]
// };
// let divElement = new Element(divEl.element, divEl.divAction, divEl.divArr);
// console.log(divElement);
// // // ___________________________
// let h1El = {
//     element: '<h1>',
//     h1Action : 'предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.',
//     h1Arr = [{
//             tag: 'align',
//             describe: 'Определяет выравнивание заголовка.',
//         },

//     ]
// }
// let h1Element = new Element(h1El.element, h1El.h1Action, h1El.h1Arr);
// console.log(h1Element);
// // ___________________________
// let spanEl = {
//     element: '<span>',
//     spanAction: ' предназначен для определения строчных элементов документа.',
//     spanArr: [{
//             tag: 'id',
//             describe: 'Указывает имя стилевого идентификатора.'
//         },
//         {
//             tag: 'style',
//             describe: 'Применяется для определения стиля элемента с помощью правил CSS.'

//         }
//     ]
// }
// let spanElement = new Element(spanEl.element, spanEl.spanAction, spanEl.spanArr)
// console.log(spanElement);
// let inputEl = {
//     element: '<input>',
//     inputActioin: ' предназначен для определения строчных элементов документа',
//     inputArr:[{
//             tag: 'id',
//             describe: 'Указывает имя стилевого идентификатора.'
//         },
//         {
//             tag: 'style',
//             describe: 'Применяется для определения стиля элемента с помощью правил CSS.'
//         }
//     ]
// }
// let inputElement = new Element(inputEl.element, inputEl.inputActioin, inputEl.inputArr);
// console.log(inputElement);
// // ___________________________________
// let formEl = {
//     element: '<form>',
//     formAction : 'устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.',
//     formArr = [{
//         tag: 'action',
//         describe: 'Адрес программы или документа, который обрабатывает данные формы.',
//     }]
// }
// let formElement = new Element(formEl.element, formEl.formAction, formEl.formArr)
// console.log(formElement);
// // _______________________
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
// class Element {
//     constructor(tag, action, arr) {
//         this.tag = tag;
//         this.action = action;
//         this.arr = arr;
//     }
// }
// // ___________________________
// //

// let aEl = {
//     element: '<a>',
//     aAction: 'является одним из важных элементов HTML и предназначен для создания ссылок.',
//     aArr: [{
//             tag: 'Задает адрес документа, на который следует перейти.',
//             describe: 'Задает адрес документа, на который следует перейти.',
//         },
//         {
//             tag: 'target',
//             describe: 'Имя окна или фрейма, куда браузер будет загружать документ.'
//         }
//     ]
// }
// let aElement = new Element(aEl.element, aEl.aAction, aEl.aArr)
// console.log(aElement)
//     // ___________________________
// let divEl = {
//     element: '<div>',
//     divAction: 'является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',
//     divArr: [{
//             tag: 'align',
//             describe: 'Задает выравнивание содержимого тега <div>.',
//         },
//         {
//             tag: 'title',
//             describe: 'Добавляет всплывающую подсказку к содержимому.',
//         }
//     ]
// };
// let divElement = new Element(divEl.element, divEl.divAction, divEl.divArr);
// console.log(divElement);
// // // ___________________________
// let h1El = {
//     element: '<h1>',
//     h1Action: 'предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.',
//     h1Arr: [{
//             tag: 'align',
//             describe: 'Определяет выравнивание заголовка.',
//         },

//     ]
// }
// let h1Element = new Element(h1El.element, h1El.h1Action, h1El.h1Arr);
// console.log(h1Element);
// // ___________________________
// let spanEl = {
//     element: '<span>',
//     spanAction: ' предназначен для определения строчных элементов документа.',
//     spanArr: [{
//             tag: 'id',
//             describe: 'Указывает имя стилевого идентификатора.'
//         },
//         {
//             tag: 'style',
//             describe: 'Применяется для определения стиля элемента с помощью правил CSS.'

//         }
//     ]
// }
// let spanElement = new Element(spanEl.element, spanEl.spanAction, spanEl.spanArr)
// console.log(spanElement);
// let inputEl = {
//     element: '<input>',
//     inputActioin: ' предназначен для определения строчных элементов документа',
//     inputArr: [{
//             tag: 'id',
//             describe: 'Указывает имя стилевого идентификатора.'
//         },
//         {
//             tag: 'style',
//             describe: 'Применяется для определения стиля элемента с помощью правил CSS.'
//         }
//     ]
// }
// let inputElement = new Element(inputEl.element, inputEl.inputActioin, inputEl.inputArr);
// console.log(inputElement);
// // ___________________________________
// let formEl = {
//     element: '<form>',
//     formAction: 'устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.',
//     formArr: [{
//         tag: 'action',
//         describe: 'Адрес программы или документа, который обрабатывает данные формы.',
//     }]
// }
// let formElement = new Element(formEl.element, formEl.formAction, formEl.formArr)
// console.log(formElement);
// _______________________

// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// let car = {
//     model: 'Highlander',
//     producer: 'Toyota',
//     tankVolume: 3.5,
//     speed: 249,
//     driver: this.driver,
//     year: 2013,
//     newValue: 2017,
//     maxSpeed: function() {
//         console.log(` їдемо зі швидкістю ${this.speed} на годину `)
//     },
//     info: function() {
//         console.log(`${this.model} ${this.producer} ${this.tankVolume} `);
//     },
//     increaseMaxSpeed: function(newSpeed) {
//         console.log(this.speed += newSpeed)
//     },
//     changeYear: function() {
//         this.year = this.newValue
//     },
//     addDriver: function(driver) {
//         this.driver = driver

//     },


// }
// car.info();
// car.increaseMaxSpeed(34);
// car.changeYear()
// let drivers = {
//     name: 'oleg',
//     age: 45,
//     expirience: 12,
// }
// car.addDriver(drivers)
// console.log(car.driver);
// ______________________________________________
// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// function Car(model, producer, year, maxSpeed, tankVolume) {
//     this.model = model,
//         this.producer = producer,
//         this.year = year,
//         this.maxSpeed = maxSpeed,
//         this.tankVolume = tankVolume,

//         this.drive = function() {
//             console.log(` їдемо зі швидкістю ${this.maxSpeed} на годину `)
//         },
//         this.info = function() {
//             console.log(`${this.model} ${this.producer} ${this.tankVolume} `);
//         },
//         this.increaseMaxSpeed = function(newSpeed) {
//             console.log(this.speed += newSpeed)
//         },
//         this.changeYear = function() {
//             this.year = this.newValue
//         },
//         this.addDriver = function(driver) {
//             this.addDriver = driver

//         }

// };

// let newCar = new Car('CX-5', 'Mazda', 2015, 243, 3.5)
// console.log(newCar);
// ______________________________________
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class Car {
    constructor(model, producer, year, maxSpeed, tankVolume) {
        this.model = model,
            this.producer = producer,
            this.year = year,
            this.maxSpeed = maxSpeed,
            this.tankVolume = tankVolume,

            this.drive = function() {
                console.log(` їдемо зі швидкістю ${this.maxSpeed} на годину `)
            },
            this.info = function() {
                console.log(`${this.model} ${this.producer} ${this.tankVolume} `);
            },
            this.increaseMaxSpeed = function(newSpeed) {
                console.log(this.speed += newSpeed)
            },
            this.changeYear = function() {
                this.year = this.newValue
            },
            this.addDriver = function(driver) {
                this.addDriver = driver

            }
    }
};
let newCar = new Car('CX-5', 'Mazda', 2015, 243, 3.5)
console.log(newCar);
// ==============================================

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// class Princess {
//     constructor(age, name, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;

//     }
// }
// --Створити 10 попелюшок , покласти їх в масив
// let arrPrincess = []
// let princess1 = new Princess(33, 'diana', 37);
// arrPrincess.push(princess1);
// let princess2 = new Princess(44, 'yulia', 40);
// arrPrincess.push(princess2);
// let princess3 = new Princess(23, 'Katya', 36)
// arrPrincess.push(princess3)
// let princess4 = new Princess(27, 'natalya', 38)
// arrPrincess.push(princess4)
// console.log((arrPrincess));
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Queen {
//     constructor(name, age, shoes) {
//         this.name = name;
//         this.age = age;
//         this.shoes = shoes;
//         let queenObj = { name: this.name, age: this.age, shoes: this.shoes }
//         console.log(queenObj);
//     }
// // }
// let prins = new Queen('Aleks', 32, 36)
//     // -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// for (let shoesSize of arrPrincess) {
//     if (shoesSize.size === prins.shoes)
//         console.log(shoesSize);
// }

// _________________________________________________
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
function Princess(name, age, shoes) {
    this.name = name;
    this.age = age;
    this.shoes = shoes;
}
// --Створити 10 попелюшок , покласти їх в масив
let arrPrincess = []
let princess1 = new Princess(33, 'diana', 37);
arrPrincess.push(princess1);
let princess2 = new Princess(44, 'yulia', 40);
arrPrincess.push(princess2);
let princess3 = new Princess(23, 'Katya', 36)
arrPrincess.push(princess3)
let princess4 = new Princess(27, 'natalya', 38)
arrPrincess.push(princess4)
console.log((arrPrincess));
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"

function Prins(name, age, shoes) {
    this.name = name;
    this.age = age;
    this.shoes = shoes;
    let queenObj = { name: this.name, age: this.age, shoes: this.shoes }
    console.log(queenObj);

    this.princess = function(arrPrincess) {
        for (let i = 0; i < arrPrincess.length; i++) {
            if (arrPrincess[i].shoes === this.shoes) {
                console.log(arrPrincess[i]);
            }
        }
    }
}
let prins = new Prins('Aleks', 32, 36)
prins.princess(arrPrincess)
    // -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить