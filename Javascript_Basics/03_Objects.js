// const tinderUser = new Object()  -> Singelton Object
// const tinderUser = {} -> Non singelton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: 'sammy',
            lastname: 'tiwari'
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: 'a',
    2: 'b'
}

const obj2 = {3: 'c', 4: 'd'}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2};
console.log(obj3);

const users = [
    {
        id: 1,
        email: "varun@gamil.com"
    },
    {
        id: 2,
        email: "varun2@gamil.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));