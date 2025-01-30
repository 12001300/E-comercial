let username=document.querySelector("#username");
let password=document.querySelector("#password");
let login_btn=document.querySelector("#sign_in");
let getuser=localStorage.getItem("username");
let getpassword=localStorage.getItem("password");

login_btn.addEventListener("click", function(e){
    e.preventDefault();
    if (username.value=="" || password.value==""){
        alert("please Fill Data");
    }
    else{
        if ((getuser && getuser.trim()==username.value.trim()) && (getpassword && getpassword==password.value)){
            setTimeout(()=>{
                window.location="pro-3-home-page.html"
            },1500)
        }
    }
});