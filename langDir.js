let getlang =localStorage.getItem("langDir")
if(getlang){
   if(getlang=="rtl"){
      changeDir("rtl")
   }else{
      changeDir("ltr")
   }
}
//language Dir
let en =document.getElementById("en_lang")
let ar =document.getElementById("ar_lang")
en.addEventListener("click",()=>changeDir("ltr"))
ar.addEventListener("click",()=>changeDir("rtl"))
function changeDir(dir){
   document.documentElement.setAttribute("dir",dir)
   localStorage.setItem("langDir",dir)
}