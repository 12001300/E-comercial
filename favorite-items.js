
let productDom=document.querySelector(".products")

function drawFavotriteproductsUI(allproducts = []){
  let products=JSON.parse(localStorage.getItem("productsFavorite"))||allproducts;
  let remain_div=document.querySelector(".massege");
  if(JSON.parse(localStorage.getItem("productsFavorite")).length==0){
    remain_div.style.display="block";
  }
  let productsUI=products.map((item)=>{
    return ` <div class="product-item">
      <img class="product-item-image" src="${item.imageUrl}">
    <div class="product-item-desc">
      <h2>${item.title}</h2>
      <p>${item.desc}</p>
      <p>Lorem ipsum dolor, sit amet  </p>
      <span> ${item.size}</span>
      <span> the quantaty: ${item.qty}</span>

      
    
    </div>
    <div class="product-item-actions">
  <button class="add-to-cart" onclick="removeFromFavorite(${item.id})">Remove From Cart</button>
  <i class="favorit fas fa-heart"></i>   
</div> 
    
    
    </div>`
 })

 productDom.innerHTML=productsUI.join("");

}
drawFavotriteproductsUI();
function removeFromFavorite(id){
  let productsFavorite=localStorage.getItem("productsFavorite")
  if(productsFavorite){
   
    let items = JSON.parse(productsFavorite);
    let filterditems= items.filter((item)=> item.id!==id);
    
    localStorage.setItem("productsFavorite",JSON.stringify(filterditems))
    drawFavotriteproductsUI(filterditems);
  }
}



