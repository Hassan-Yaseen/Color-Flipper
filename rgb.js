let color=document.querySelector(".color");
let btn=document.querySelector("#btn");
let main=document.querySelector("main");

btn.addEventListener("click",()=>{
    let newClr=`rgb(${getRandom()},${getRandom()},${getRandom()},1)`;
    main.style.backgroundColor=newClr;
    color.innerText=newClr;
})

const getRandom=()=>{
    return Math.floor(Math.random()*255);
}

