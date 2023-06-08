
let userName = prompt("Enter your name: ")

let userGender = prompt("Enter your gender: male/female")

let userAge = prompt("Enter your age: ")

while (userAge<=0 && userAge!=null) {
    alert("Unvalid age value")
    userAge = prompt("Enter your age: ")
}
let welConf =confirm(" Skip welcome message?")
if(welConf==false) {

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
 
const arrAnswers =()=> {
myArray.push(prompt("Do you have a job: Yes/No"))
myArray.push(prompt("Do you have many daily tasks: Yes/No"))
myArray.push(prompt("Do you like to order your tasks: Yes/No"))    
} 

const arrModify =()=> {
    for(let i = 0 ; i < myArray.length ; i++)
    if (myArray[i]!="Yes" && myArray[i]!="No" && myArray[i]!="no" && myArray[i]!="yes")
    myArray[i]="invalid"
}

const arrTraverse =()=> {
    for(let i =0;i<myArray.length;i++)
    console.log(myArray[i])
}

arrAnswers()
arrModify()
arrTraverse()