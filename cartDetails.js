let products = JSON.parse(localStorage.getItem("products"))
let itemDom=document.querySelector(".Item-details")
let productId=localStorage.getItem("productId");
let productDetails=products.find((item)=> item.id==productId)
itemDom.innerHTML=`
<img src="${productDetails.imageUrl}" alt="">
          <h2>${productDetails.title}</h2>
          <p>${productDetails.desc}</p>
          <span>size: ${productDetails.size}</span><br>
          <span>quantaty: ${productDetails.qty}</span>
        <br>
          <button onclick="editProduct(${productId})">Edit product</button>
          `
          function editProduct(id){
            localStorage.setItem("editproduct",id);
            window.location="editproduct.html"
          
          }