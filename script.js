let button = document.querySelectorAll("button");

button.forEach(l=>l.addEventListener("click",function (){
    
    let ch=prompt("Enter Your Size : \n  1-small \n 2-Medium \n 3-large \n ");
    let Quantity=prompt("Enter number Quantity Reqired:");
    let finalbill= 20 * Quantity;
   
    if(ch==1){
        finalbill=Quantity*20;
        alert("final bill= "+ finalbill+"Rs");
    }
    else if (ch==2) {
        finalbill=Quantity*25;
        alert("final bill= "+ finalbill+"Rs");
    } 
    else if (ch==3){
        finalbill=Quantity*30;
        alert("final bill= "+ finalbill+"Rs");
    }
    else{
        alert("Select a size");
    }
       
        
        
    }))

