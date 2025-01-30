
let productDom=document.querySelector(".products")

function drawCartproductsUI(allproducts = []){
  let products=JSON.parse(localStorage.getItem("productsInCart"))||allproducts;
  let remain_div=document.querySelector(".massege");
  if(JSON.parse(localStorage.getItem("productsInCart")).length==0){
    remain_div.style.display="block";
  }
  let productsUI=products.map((item)=>{
    return ` <div class="product-item">
      <img class="product-item-image" src="${item.imageUrl}">
    <div class="product-item-desc">
      <h2>${item.title}</h2>
      <p>${item.desc}  </p>
      <span> ${item.size}</span>
      <span> the quantaty: ${item.qty}</span>

      
    
    </div>
    <div class="product-item-actions">
  <button class="add-to-cart" onclick="removeFromCart(${item.id})">Remove From Cart</button>
  <i class="favorit fas fa-heart"></i>   
</div> 
    
    
    </div>`
 })

 productDom.innerHTML=productsUI.join("");

}
drawCartproductsUI();
function removeFromCart(id){
  let productsInCart=localStorage.getItem("productsInCart")
  if(productsInCart){
   
    let items = JSON.parse(productsInCart);
    let filterditems= items.filter((item)=> item.id!==id);
    
    localStorage.setItem("productsInCart",JSON.stringify(filterditems))
    drawCartproductsUI(filterditems);
  }
}



