const hex=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
let color=document.querySelector(".color");
let btn=document.querySelector("#btn");
let main=document.querySelector("main");

btn.addEventListener("click",()=>{
    let hexClr="#";
    for(let i=0;i<6;i++){
        hexClr+=hex[getRandom()];
    }
    main.style.backgroundColor=hexClr;
    color.innerText=hexClr;
})

const getRandom=()=>{
    return Math.floor(Math.random()*15);
}