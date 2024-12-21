let rand= Math.random()

document.querySelectorAll(".box").forEach(e=>{
    if(rand<0.2){
        e.style.backgroundColor ="red"

    }

    else if (rand>0.2 && rand<0.4){
        e.style.backgroundColor ="blue"
    }

    else if (rand>0.4 && rand<0.8){
        e.style.backgroundColor="purple"
    }

    else{
        e.style.backgroundColor="pink"
    }
})