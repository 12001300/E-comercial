// let products=JSON.parse(localStorage.getItem("products"))||product;
//Display products
let productDom=document.querySelector(".products")
let drawproductsUI;
( drawproductsUI= function (products = []){
    let myProducts=products.filter(item=>item.isMe=="Y");
    
    if (myProducts.length!==0){
   
    let productsUI=myProducts.map((item)=>{
        
       return ` <div class="product-item" style="border:${item.isMe=="Y"?"1px solid green":""}">
         <img class="product-item-image" src="${item.imageUrl}">
       <div class="product-item-desc">
        <a onclick="saveItemData(${item.id})">${item.title}</a>
         <p>${item.desc} </p>
         <span> ${item.size}</span>
         <button class="edit-product" onclick='editProduct(${item.id})'>Edit product</button>
        <br>
         <button class="edit-product" onclick='deleteProduct(${item.id})'>delete product</button>
        
       
       </div>
 
       
       
       </div>`
    })
    productDom.innerHTML=productsUI.join("");
}else{
document.getElementById("massege").innerHTML="there is no product in here"
}

 })(JSON.parse(localStorage.getItem("products"))||products)
 //Edit Products
function editProduct(id){
  localStorage.setItem("editproduct",id);
  window.location="editproduct.html"

}

function deleteProduct(id){
  let products =JSON.parse(localStorage.getItem("products"))||  product;
  let myProducts=products.filter((item)=> item.isMe==="Y");
  
  let filterd=myProducts.filter(i => i.id!==id)
  let clickedItem=myProducts.find(i => i.id===id);
  products=products.filter((i)=> i.id!==clickedItem.id)
  localStorage.setItem("products",JSON.stringify(products))
drawproductsUI(filterd)
window.location.reload()
}