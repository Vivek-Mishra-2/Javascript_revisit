// if multiple arguements are being passed to the function
//  ... rest operator sometimes known as spread operator depends on the use case

function addToCart(...num1) {
    return num1
}

console.log(addToCart(200, 300, 400, 100));

// function addToCart(val1, val2, ...num1) {
//     return num1
// }
// val1 = 200 and val2 = 300 rest all are in num1 array
// console.log(addToCart(200, 300, 400, 100));

const user = {
    username: "vivek",
    price: 100
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: 'ram',
    price: 40
})

const myArray = [100, 200, 300] 

function secondValue(getArray) {
    return getArray[1]
}

console.log(secondValue(myArray))