//Variables
let productName =document.getElementById("product-name")
let productDesc =document.getElementById("product-desc")
let productSizeSelect =document.getElementById("product-size")
let creatForm =document.getElementById("creat-form")
let inputfile =document.getElementById("upload-image-file")
let productImg;
let ProductSizeValue;
//Events
productSizeSelect.addEventListener("change",getProductSizeValue);
creatForm.addEventListener("submit",creatProductFun);
inputfile.addEventListener("change",uploadImage);

//Functions
function getProductSizeValue(e){

ProductSizeValue=(e.target.value);
}
function creatProductFun(e){
    e.preventDefault();

    let allproducts=JSON.parse(localStorage.getItem("products"))||product;
    let nameValue= productName.value;
    let descValue= productDesc.value;
    if (nameValue && descValue){
    let obj={
        id:allproducts?allproducts.length+1:1,
        qty:1,
        size:ProductSizeValue,
        imageUrl:productImg,
        title:nameValue,
        desc:descValue,
        isMe:"Y",
    };
    let newproduct= allproducts?[...allproducts,obj]:[obj];
    localStorage.setItem("products",JSON.stringify(newproduct));
  productName.value="";
  productDesc.value="";
  productSizeSelect.value=""
  setTimeout(()=>{
    window.location="pro-3-home-page.html"
  },500)
    
}else{
    alert("pleas fill all gaps")
}

}
//uploadImage

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
}

//to solve uploading problem
function getImageBase64(file){
let reader=new FileReader();
reader.readAsDataURL(file)
reader.onload = function(){
productImg=reader.result;
}
reader.onerror=function(){
    alert("Error!!")
}
}