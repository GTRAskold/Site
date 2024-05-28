// задание 2
// let name; 
// let admin;

// name = 'иван';
// admin = 'иван'; // заначение изменино 

// alert(admin)

// задание 3
// let name = "Ilya";
// alert( 'hello ${1}' ); //hello ${1}
// alert( 'hello ${"name"}' ); //hello ${1}
// alert( 'hello ${name}' ); //hello ${1}

// задание 4
// let name = prompt('как тебя зовут?');
// alert(`Тебя зовут ${name}`);

// задание 5
// let a = 1, b = 1 ;
// let c = ++a; // 2
// let d = b++; // 1
// // alert(c)
// // alert(b)

// задание 6
// let a = 2;
// let x = 1 + (a *= 2);
// alert(a) //4
// alert(x) //5

// задание 7
// let a = Number(prompt("Первое число?", ''));
// let b = Number(prompt("Второе число?", ''));
// alert(a + b); // 12


// задание 8
// 7 > 5 // True
// "стол" > "стул" // False
// "4" > "52" // False
// undefined == null // True
// undefined === null // False
// null == "\n0\n" // False
// null === +"\n0\n" // False
// alert(null === +"\n0\n")


// задание 9
// if ("0") {
//     alert( 'Привет' );
//   }

// задание 10

// let year = prompt('Какое «официальное» название JavaScript?', '');

// if (year == 2015) {
//     alert('Верно!')
// } else {
//     alert('Не знаете? ECMAScript!»')
// }

// задание 11
// let n = prompt('число', '');
// if (n > 0) {
//     alert('больше нуля');
// } else if (n < 0) {
//     alert('меньше нуля');
// } else {
//     alert('равно');
// }

// задание 12
// let result;
// (a + b < 4) ? result = 'Мало' :  result = 'Много'


// задание 13
// let message;
// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// let message = (login == 'Сотрудник') ? 'Привет' :
// (login == 'Директор') ? 'Здравствуйте' :
// (login == '') ? 'Нет логина' :
// '';

// задание 14
// alert( null || 4 || undefined );
// 4

// задание 15
// alert( alert(1) || 2 || alert(3) );
// 1 потом 2

// задание 16
// alert( 1 && null && 2 );
// null 

// задание 17
// alert( alert(1) && alert(2) );
// 1  


// задание 18
// alert( null || 2 && 3 || 4 );
// 3

// задание 19

// let value = NaN;

// value &&= 10;
// value ||= 20;
// value &&= 30;
// value ||= 40;

// alert(value);

// 30

// заданаие 20

// if  (age>=14 && age <=90){}

// Задание 21

// if (!(age>=17 && age <=99)){
// }
// if (age < 17 || age >99) {
// }


// задание 22


// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );

// first выполняется 
// second не выполняется
// third  выполняется


// задание 23

// let login = prompt("Введите логин:", "");

// if (login === "Админ") {
//   let password = prompt("Введите пароль:", "");

//   if (password === "Я главный") {
//     alert("Здравствуйте!");
//   } else if (password === "" || password === null) {
//     alert("Отменено");
//   } else {
//     alert("Неверный пароль");
//   }
// } else if (login === "" || login === null) {
//   alert("Отменено");
// } else {
//   alert("Я вас не знаю");
// }