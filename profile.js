//get data from local storage
let get_user=localStorage.getItem("username")
let get_email=localStorage.getItem("email")
let products=JSON.parse(localStorage.getItem("products"))||product;
let myProducts=products.filter((i)=>i.isMe=="Y");
let oldAvatarImg=document.querySelector(".container #avatar-img");

//Variabels 
let userDom2=document.getElementById("user_name")
let userEmailDom=document.getElementById("email")
let productslength=document.querySelector("#productslength span")
userDom2.innerHTML=get_user;
userEmailDom.innerHTML=get_email;
if (myProducts.length!=0){
    
    productslength.innerHTML=myProducts.length;
}else{
    productslength.remove();

}
function setimgURL(){
localStorage.setItem("profileImg","project's images/images.png")
}
function drawprofilepic()
{
   let newImg=localStorage.getItem("profileImg");
oldAvatarImg.innerHTML=`<img src="${newImg}" alt="" >`

}
drawprofilepic()