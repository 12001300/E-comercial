//variabels
let editname=document.getElementById("new-proto-name");
let editemail=document.getElementById("new-proto-email");
let editproImg=document.getElementById("new-proto-img");
let olduserName=localStorage.getItem("username");
let olduseremail=localStorage.getItem("email");
let update_btn=document.getElementById("update-btn");
// let oldAvatarImg=document.querySelector(".container #avatar-img");


update_btn.addEventListener("click",function(e){
    e.preventDefault()
    olduserName=editname.value
    olduseremail=editemail.value
    localStorage.setItem("username",olduserName);
    localStorage.setItem("email",olduseremail);
    editemail.value=""
    editname.value=""
    setTimeout(()=>{
        window.location="profile.html"
    },500)
})

editproImg.addEventListener("change",uploadImage)
function uploadImage(){
    
    let file=this.files[0]
    
    console.log(file)
   let types =["image/jpeg","image/png"]
    if (types.indexOf(file.type)==-1){
        alert("type not supported")
        return;
    }
    if (file.size>2*1024*1024){
        alert("image not exced  2MG")
        return;
    }
    // productImg=URL.createObjectURL(file)
     
     


    getImageBase64(file);
//    oldAvatarImg.clear();
    // return `<img src="${productImg}" alt="" id="avatar-img">`
    

}

//to solve uploading problem
function getImageBase64(file){
let reader=new FileReader();
reader.readAsDataURL(file)
reader.onload = function(){
let productImg=reader.result;

localStorage.setItem("profileImg",productImg)

}
reader.onerror=function(){
    alert("Error!!")
}
}
