

//Define product
let productDom=document.querySelector(".products")
// let cardProductDiv=document.querySelector(".carts-products div")
// let badgeDom=document.querySelector(".badge")
// let cardProductDom=document.querySelector(".carts-products")
// let shoppingcarticon=document.querySelector(".shoppingcart")
var products=product;

let drawproductsUI;
( drawproductsUI= function (products = []){
   let productsUI=products.map((item)=>{
      
      return ` <div class="product-item" style="border:${item.isMe=="Y"?"1px solid green":""}">
        <img class="product-item-image" src="${item.imageUrl}">
      <div class="product-item-desc">
       <a onclick="saveItemData(${item.id})">${item.title}</a>
        <p>${item.desc} </p>
        <span> ${item.size}</span>
        ${item.isMe=="Y" ? "<button class='edit-product' onclick='editProduct("+item.id+")'>Edit product</button>":""}
        
      
      </div>
      <div class="product-item-actions">
    <button class="add-to-cart" onclick="addedToCart(${item.id})">Add To Cart</button>
    <i class="favorit fas fa-heart" style="color:${item.liked==true?"red":""}" onclick= addedToFavourit(${item.id})></i>   
  </div> 
      
      
      </div>`
   })
   productDom.innerHTML=productsUI.join("");
})(JSON.parse(localStorage.getItem("products"))||products)

// let addedItem=localStorage.getItem("productsInCart")? JSON.parse(localStorage.getItem("productsInCart")):[];

// if (addedItem){
   
//  addedItem.map((item)=>{
//       cardProductDiv.innerHTML +=`<p>${item.title} ${item.qty}</p>`;

//    })
//    badgeDom.style.display="block";
//    badgeDom.innerHTML +=addedItem.length;
// }

//add to cart

function addedToCart(id){
   
 if(localStorage.getItem("username"))
   {
      let productss=JSON.parse(localStorage.getItem("products"))||products;
      let product=productss.find((item)=> item.id==id);
      let isproductInCart =addedItem.some(i=>i.id==product.id)
      if(isproductInCart){
        addedItem=addedItem.map((p)=>{

         if(p.id==product.id) p.qty+=1;
         return p;
        })
         
      
      }
      else{
         addedItem.push(product);
      
      }
      cardProductDiv.innerHTML=""
      addedItem.forEach((item)=>{

         cardProductDiv.innerHTML+= `<p>${item.title} <span class="item-qty">${item.qty}</span></p>`
      
      })
      

//to add this to local storage



localStorage.setItem("productsInCart",JSON.stringify(addedItem))
////
   badgeDom.style.display="block";
 let cardProductitems=document.querySelectorAll(".carts-products div p")
 
 badgeDom.innerHTML= cardProductitems.length;
     
   }else{
      window.location="Login-page.html"
   }
}



// function openCartMenu(){


// if (cardProductDiv.innerHTML!==""){
//    if(cardProductDom.style.display =="none"){
//       cardProductDom.style.display ="block"
//    }else{
// cardProductDom.style.display ="none"
//    }
// }

// }

// shoppingcarticon.addEventListener("click",openCartMenu);
function saveItemData(id){
   localStorage.setItem("productId",id);
   window.location="cartDetails.html";
}

function getUniqueArr(arr,fillterType){
    let unique= arr.map(item=>item[fillterType])
    .map((item,i,final)=>final.indexOf(item)==i&&i)
    .filter((item)=>arr[item])
    .map((item)=>arr[item])
    return unique
}


// search fuction
let input =document.getElementById("search");

input.addEventListener("keyup",function(e){
   e.preventDefault()
 

   search(e.target.value ,JSON.parse(localStorage.getItem("products")))
      
   
   if (e.target.value.trim()==""){
      drawproductsUI(JSON.parse(localStorage.getItem("products"))||product)

   }
})
function search(title,myArray){
   // for(var i=0 ; i < myArray.length ; i++){
   //    if(myArray[i].title===title){
   //       console.log(myArray[i])

   //    }
   // } this the first way of doing search
 
   let arr = myArray.filter((item)=> item.title.toLowerCase().indexOf(title.toLowerCase())!==-1)
   
   drawproductsUI(arr)

   //this is the second way but here it returns the result in array 
   //if we want the result as it is ....we can use find() instaid

}

// search("headphone item",JSON.parse(localStorage.getItem("products")))
//add to favorit
let favoritItems=localStorage.getItem("productsFavorite")? JSON.parse(localStorage.getItem("productsFavorite")):[];
function addedToFavourit(id){
   
 if(localStorage.getItem("username"))
   {

      let choosenItem=products.find((item)=> item.id==id);
    
      
favoritItems=[...favoritItems,choosenItem];
choosenItem.liked=true;
let uniqueproudct =getUniqueArr(favoritItems,"id");





localStorage.setItem("productsFavorite",JSON.stringify(uniqueproudct))
products.map((item)=>{
if (item.id==choosenItem.id){
   item.liked=true
   


}
localStorage.setItem("products",JSON.stringify(products))
drawproductsUI(products)
   })
   
   }else{
      window.location="Login-page.html"
   }
}
// Filter products by size
let sizeFilter=document.getElementById("size-filter");
sizeFilter.addEventListener("change",getProductsFilteredBySize);
function getProductsFilteredBySize(e){
let val=e.target.value;
let products=JSON.parse(localStorage.getItem("products")) || product;
if (val=="all"){
   drawproductsUI(products);

}else{
   products=products.filter((i)=> i.size==val);
   drawproductsUI(products)
}
}
//Edit Products
function editProduct(id){
  localStorage.setItem("editproduct",id);
  window.location="editproduct.html";

}

