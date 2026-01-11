let main = document.querySelector("#main")
let crsr = document.querySelector(".cursor")

main.addEventListener("mousemove",(x)=>{
    crsr.style.left = x.x+"px"
    crsr.style.top = x.y+"px"
})