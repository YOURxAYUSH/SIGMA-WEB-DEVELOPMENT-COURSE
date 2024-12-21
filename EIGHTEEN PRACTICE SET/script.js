
function newvideo(duration , title, channel_name,views,monthsold) {

    document.querySelector(".container p").innerHTML=duration
    document.querySelector(".naming div ").innerHTML=title
    document.querySelector(".naming span").innerHTML=channel_name
    if(views<1000){
        
    document.querySelector(".naming span:nth-child(2)").innerHTML=views
    }
  
    else if(views>=1000 && views<1000000){
       
         let viewk = (views/1000).toFixed(0) + "K"
     
         document.querySelector(".naming span:nth-child(2)").innerHTML=viewk
   
    }

    else if(views>=1000000 && views<1000000000){
        let viewk = (views/1000000).toFixed(0) + "M"
        document.querySelector(".naming span:nth-child(2)").innerHTML=viewk

    }

    else{

        let viewk = (views/1000000000).toFixed(0) +"B"
        document.querySelector(".naming span:nth-child(2)").innerHTML=viewk
    }


    
    document.querySelector(".naming span:nth-Child(4)").innerHTML=monthsold

    
  
}


