let rand = Math.random()
let first , second , third;

if (rand<0.33){
    first="Crazy"
}

else if (rand<0.66 && rand>0.33){

    first="Amazing"

}

else{

    first="Fire"

}

let sher = Math.random()

if(sher<0.33){
    second="Food"
}

else if (sher>0.33 && sher<0.66){
    second="Garments"
}

else {
    second="Shop"
}

let tutor = Math.random()


if(tutor<0.33){
    third="Hub"
}

else if (tutor<0.66 && tutor>0.33){
    third="Limited"
}

else{
    third="Private"
}

console.log(`${first} ${second} ${third}`)




