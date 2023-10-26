// Object Literals

const MySym = Symbol('key1');

const JsUser = {
    name: 'Vivek',
    "full name": 'Vivek Mishra',
    [MySym]: 'mykey1',
    age: 21,
    location: 'India',
    email: 'vivek@micro.com',
    isLoggerIn: false,
    lastLoginDays: ["Saturday", "Monday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]); 
// console.log(JsUser[MySym]);

JsUser.email = 'vivek@eminem.com';
// Object.freeze(JsUser)
JsUser.email = 'vivek@gmail.com';
console.log(JsUser);

JsUser.greeting = function(){
    console.log('Hellow JS User');
}
// console.log(JsUser.greeting);

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

