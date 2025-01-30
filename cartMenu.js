let cardProductDiv=document.querySelector(".carts-products div")
let badgeDom=document.querySelector(".badge")
let cardProductDom=document.querySelector(".carts-products")
let shoppingcarticon=document.querySelector(".shoppingcart")

let addedItem=localStorage.getItem("productsInCart")? JSON.parse(localStorage.getItem("productsInCart")):[];

if (addedItem){
   
 addedItem.map((item)=>{
      cardProductDiv.innerHTML +=`<p>${item.title} ${item.qty}</p>`;

   })
   badgeDom.style.display="block";
   badgeDom.innerHTML +=addedItem.length;
}
//open cart menu
function openCartMenu(){


    if (cardProductDiv.innerHTML!==""){
       if(cardProductDom.style.display =="block"){
          cardProductDom.style.display ="none"
       }else{
    cardProductDom.style.display ="block"
       }
    }
    
    }
    shoppingcarticon.addEventListener("click",openCartMenu);
