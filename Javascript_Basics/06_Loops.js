// For Of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each char is: ${greet} `)
}

// MAP 

const map = new Map()
map.set('IN', "India")
map.set('US', "America")

// console.log(map)

for (const [key, value] of map) {
    console.log(key, ':-', value)
}

// ON Objects

const myObj = {
    'game1': 'NFS',
    'game2': 'GTA',
    'game3': 'Project IGI'
}

// for (const key of myObj) {
//     console.log(key)
// }
// Object not iterable using this forof loop