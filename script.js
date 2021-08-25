let panels=document.querySelectorAll(".panel")


 panels.forEach((a)=>{
     a.addEventListener("click",()=>{
         ukloni()
         a.classList.add("active")
         
         


     })
 })

 function ukloni(){
     panels.forEach((panel)=>{
panel.classList.remove('active')
     })
 }
 