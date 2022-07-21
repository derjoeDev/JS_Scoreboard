let scorehome = document.getElementById("numberscore")
let scoreguest = document.getElementById("numberscoreguest")



let count = 0

function hPlusone(){
    count = count + 1
    scorehome.innerHTML = count
    
}
hPlusone()

function hPlustwo(){
    count = count + 2
    scorehome.innerHTML = count
    
}
hPlustwo()

function hPlusthree(){
    count = count + 3
    scorehome.innerHTML = count
    
}
hPlusthree()


function gPlusone(){
    count = count + 1
    scoreguest.innerHTML = count
    
}
gPlusone()

function gPlustwo(){
    count = count + 2
    scoreguest.innerHTML = count
    
}
gPlustwo()

function gPlusthree(){
    count = count + 3
    scoreguest.innerHTML = count
    
}
gPlusthree()

function reset(){
    count = 0
    numberscore.innerHTML = count
    numberscoreguest.innerHTML = count
 
}

reset()


