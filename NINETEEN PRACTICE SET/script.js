let text = [
    "Initializing Hacking",
    " Password Files Detected",
    "Hacking Has Been Started",
    "All Files Fetched Succesfully",
    "Cleaning Traces "

]

// const addItem  = (item)=>{
//     let div = document.createElement("div")
//     div.innerHTML= item
//     document.body.append(div)
//    }

// for ( const item of text){
//     addItem(item)
// }


const addItem  = async(item)=>{

    await randomDelay()
    let div = document.createElement("div")
    div.innerHTML= item
    document.body.append(div)
   }

   const randomDelay = ()=>{
    return new Promise((resolve, reject) => {
        timeout=1+Math.random()*6
        setTimeout(()=>{
            resolve()
        } , timeout *1000);

    })
   }

   async function main() {

    let t = setInterval(() => {
    let last = document.body.getElementsByTagName("div")
        last=last[last.length-1]
    
    if(last.innerHTML.endsWith("...")){
       last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length-3)

    }
    else{
        last.innerHTML = last.innerHTML + "."
    }
   
}, 200);

    for ( const item of text){
        await addItem(item)



    }


    await randomDelay()
    clearInterval
   }

   main()

