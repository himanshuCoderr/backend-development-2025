
// function sample(){
//     console.log("Hello world")
// }


// sample()


// function greet(name){
//     console.log("HEllo" , name , "Ji") 
// }

// greet("Jas")
// greet("Himanshu")
// greet("Happy")


// function calculator(num1 , num2 , operation){
//     if(operation == "sum") {
//         console.log(num1 + num2)
//     }else if(operation == "sub") {
//         console.log(num1 - num2)
//     } else if(operation == "mul"){
//         console.log(num1 * num2)
//     }else {
//         console.log("Undefined operation")
//     }
// }


// calculator(12 , 13 , "")


//  arrow function

// let calculator = (num1 , num2 , operation) => {
//     if(operation == "sum") {
//         console.log(num1 + num2)
//     }else if(operation == "sub") {
//         console.log(num1 - num2)
//     } else if(operation == "mul"){
//         console.log(num1 * num2)
//     }else {
//         console.log("Undefined operation")
//     }
// }

// calculator(12 , 13 , "sum")


//  functions are ssupposed to work but at the end they are supposed to return something

// let greet = (name) => "hello" + name 


// let res = greet("Himanshu")

// console.log(res)



// callbacks 


function sample(num1){
    num1()
    console.log(num1)
}

// sample(12)
// sample("Himanshu")
// sample([12 , 13 , 23 , 34 , 25])
// sample({name :  "Himanshu"})

function sample2(){
    console.log("Hello from sample 2")
}

//  callbacks -> callback function are function that are passed to another function as parameter and after passing they are called inside the function then they are know as callback functions
sample(sample2)