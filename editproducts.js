// //Variables
let products=JSON.parse(localStorage.getItem("products"))||product;
let productId=JSON.parse(localStorage.getItem("editproduct"))
let getProduct=products.find(i=>i.id==productId)
console.log("befor update",getProduct)


let productName =document.getElementById("product-name")
let productDesc =document.getElementById("product-desc")
let productSizeSelect =document.getElementById("product-size")
 let updateForm =document.getElementById("update-form")
let inputfile =document.getElementById("upload-image-file")
 let productImg;
 productName.value=getProduct.title;
 productDesc.value=getProduct.desc;

productSizeSelect.value=getProduct.size;
productImg=getProduct.imageUrl;
// //Events
 productSizeSelect.addEventListener("change",getProductSizeValue);
 updateForm.addEventListener("submit",updateProductFun);
 inputfile.addEventListener("change",uploadImage);

// //Functions
function getProductSizeValue(e){

 ProductSizeValue=(e.target.value);
 }
function updateProductFun(e){
    e.preventDefault();
    
getProduct.title=productName.value;
getProduct.desc=productDesc.value;
getProduct.size=ProductSizeValue;
getProduct.imageUrl=productImg;
console.log("after update",getProduct)
localStorage.setItem("products",JSON.stringify(products));

setTimeout(()=>{
  window.location= "pro-3-home-page.html"} 
    ,500)

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
