let a = 6

function factorial(number){
    let arr= Array.from(Array(number+1).keys())
    let c = arr.slice(1,).reduce((a,b)=> a*b)
    return c
  
}
console.log(factorial(a))

function facfactor(number){
    let fac=1;
    for ( let index=1 ; index<=number;index++){
        fac= fac*index
    }
    return fac
}

console.log(facfactor(a))