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