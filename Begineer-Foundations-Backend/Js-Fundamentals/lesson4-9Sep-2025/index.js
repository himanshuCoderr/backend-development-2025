


let person = {
    name: "Himanshu",
    age: 20,
    city: "Delhi",
    country: "India",
    isMarried: false,
    hasChildren: false,
    hasJob: true,
    hasEducation: true,
    hasLicense: true,
}

// console.log(person.name)
// console.log(person.age)
// console.log(person.city)
// console.log(person.country)
// console.log(person.isMarried)
// console.log(person.hasChildren)
// console.log(person.hasJob)
// console.log(person.hasEducation)
// console.log(person.hasLicense)


// console.log(delete person.hasLicense)


// looping on objects

// for in 

// for(let key in person){
//     console.log(person[key])
// }

// let car = {
//     brand : "Toyota",
//     model : "Corolla",
//     year : 2020,
//     color : "Red",
//     price : 100000,
//     isNew : true,
//     isUsed : false,
//     isElectric : false,
//     isHybrid : false,
//     isGasoline : true,
//     isDiesel : false,
//     isPetrol : true,
//     isLPG : false,
// }


// console.log(car)



// let arr = [1,2,3,4,5,6,7,8,9,10]

// let names = ["Himanshu", "Jasmine", "Happy", "Jaspreet", "Happy"]

// console.log(names)


// console.log(arr[2] + arr[3])


// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }




//  try catch 
//  
// console.log("Hello 1")
// function check(a , b){

//     try{
//         if(a > b){
//             throw new Error("a is greater than b")
//         }
//     }catch(error){
//         console.log(error)
//     }

//     return null
// }

// check(30 , 20)
// console.log("Hello 2")


// template literals

// let name = "Happy"
// let age = 20
// let city = "Delhi"
// let country = "India"

// console.log(`My name is ${name} and my age is ${age} and my city is ${city} and my country is ${country}`)


// arrow function


//  destructuring
// let arrNames = ["Himanshu", "Jasmine", "Happy", "Jaspreet",]


// let [name1 , name2 , name3 , name4] = arrNames

// console.log(name1 , name2 , name3 , name4)



// let obj = {
//     name : "Himanshu",
//     age : 20,
//     city : "Delhi",
//     country : "India",
// }

// let {name ,city , age , country} = obj

// console.log(name , age , city , country)


//  spread operator

// let arr1 = [1,2,3,4,5,6,7,8,9,10]
// let arr2 = [11,12,13,14,15,16,17,18,19,20]

// let arr3 = [...arr1 , ...arr2]


// rest operator

// function sum(...args) {
//     console.log(args)
// }  

// sum(1,2,3,4,5,6,7,8,9,10)



// spread operator 


// let obj1 = {
//     name : "Himanshu",
//     age : 20,
//     city : "Delhi",
//     country : "India",
// }

// obj2 = {...obj1}

// obj2.name  = "Happy"

// console.log(obj2)

// console.log(obj1)



// promise 


let prom1 = new Promise((res, rej) => {
    setTimeout(() => {
        rej("Hnji done")
    }, 10000)

})

async function getUpdate() {
    try {
        let result = await prom1
        console.log(result)
        
    } catch (error) {
        console.log("Catch is running")
        console.log(error)
    }
}

getUpdate()

// prom1.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

