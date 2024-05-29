let win=true;
let choice=["rock","paper","scissor"];
let compDisplay=document.querySelector("#compchoice")
let choices=document.querySelectorAll(".choice");
var c=document.querySelector(".message")
let genCompChoices=()=>{
    let idx=Math.floor(Math.random()*3);
    return choice[idx];
}
choices.forEach((choice)=>{
    choice.addEventListener("click",function(){
        const userchoice=choice.getAttribute("id");
        
        playgame(userchoice);
    })
})

function showWinner(win){
    let a=document.getElementById("userscore")
    let b=document.getElementById("compscore")
    if(win){
        console.log("you win")
       let num=Number(a.innerText)
       num+=1;
       a.innerHTML=num;
       c.innerHTML="You Win"
       c.style.backgroundColor="green";
       c.style.color="white";
   }
   else{
        console.log("computer win")
       console.log(b.innerText)
       let num=Number(b.innerText)
       num+=1;
       b.innerHTML=num;
       c.innerHTML="You Loose!!";
       c.style.backgroundColor="red";

   }


}
let playgame=(userchoice)=>{
    let compchoice = genCompChoices();
    console.log("choice was clicked", userchoice);
    console.log( "computer choice",compchoice);
    
    let imageUrl = "compchoice.jpg";
    // console.log(compchoice,"test")

    // let imageElement = `<img src="${imageUrl}" alt="compchoice">`;
    let imageElement = `<img src="rock.jpg" alt="compchoice">`
    compDisplay.innerHTM= imageElement;

    
    if(compchoice===userchoice){
        c.innerHTML="Draw";
        console.log("Win status:","Draw" );
        c.style.backgroundColor="blue"
        c.style.color="white"
        return;
        
    }
    else{
        
        if (userchoice === "rock") {
            win = compchoice === "scissor" ? true : false;
        } else if (userchoice === "scissor") {
    
            win = compchoice === "paper" ? true : false;
        } else { // userchoice === "paper"
            win = compchoice === "rock" ? true : false;
        }
    }
    console.log("Win status:", win);
    showWinner(win);

    
   
    
}