//regester the user
let username=document.querySelector("#username");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let regester_btn=document.querySelector("#sign_up");
regester_btn.addEventListener("click",function(e){
    e.preventDefault();
    if (username.value=="" || email.value==""||password.value==""){
        alert("please Fill Data");
    }
    else{
        localStorage.setItem("username",username.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)
        setTimeout(()=>{
            window.location="Login-page.html"
        },1500)
    }
   
})