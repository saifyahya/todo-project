
let welConf =confirm(" Skip welcome message?")
if(welConf==false) {
    let userName = prompt("Enter your name: ")

let userGender = prompt("Enter your gender: male/female")

let userAge = prompt("Enter your age: ")

while (userAge<=0 && userAge!=null) {
    alert("Unvalid age value")
    userAge = prompt("Enter your age: ")
}

    if(userGender=="male"||userGender=="Male"){
        alert("Welcome Mr."+userName)
    }
    else if(userGender=="female"||userGender=="Female"){
        alert("Welcome Ms."+userName)
    }
    else{
        alert("Welcome "+userName)
    }
}



 let myArray=[]

let q1= prompt("Do you have a job: Yes/No")
let q2= prompt("Do you have many daily tasks: Yes/No")
let q3= prompt("Do you like to order your tasks: Yes/No")

const arrAnswers =()=> {
myArray.push(q1)
myArray.push(q2)
myArray.push(q3)    
} 

const arrModify =()=> {
    for(let i = 0 ; i < myArray.length ; i++)
    if (myArray[i]=="")
    myArray[i]="invalid"
}

const arrTrev =()=> {
    for(let i =0;i<myArray.length;i++)
    console.log(myArray[i])
}

arrAnswers()
arrModify()
arrTrev()