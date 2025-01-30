let userInfo=document.querySelector("#user_info");
let userDom=document.querySelector("#user");
let Links=document.querySelector("#links");
let Logout_btn=document.querySelector("#logout");
let username=localStorage.getItem("username");

if (username){
    Links.remove();
    userInfo.style.display="flex";
    userDom.innerHTML=username;
}
Logout_btn.addEventListener("click",function(e){
   localStorage.clear();
   setTimeout(()=>{
window.location="regester.html"
   },1500)
})