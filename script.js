
let type = 0;


function handleType(id)
{
 type = id;

 const space =document.getElementById('space');
 space.innerHTML = `<span></span>`
 loadData();
}



async function loadData() 
{
    const response = await fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json");
    const data = await response.json();
   console.log(data.categories[type].category_products)

  
   data.categories[type].category_products.map((i)=>{
     
    const ele =
   `<div class="container">
   <div onmouseover="handleImage()"  style='background-image: url(${i.image});' class="imgbox">
   ${i.badge_text?
     ` <h3 class="sale">${i.badge_text}</h3>`
      :
      ``}
  </div>
  <div class="metabox">
      <span id ="productTitle">${i.title}</span>
      <span style="font-size: x-large;">${i.vendor}</span>
  </div>
  
  <div class="pricebox">
      <span>${i.price}</span>
      <span style="text-decoration: line-through; color: gray;">${i.compare_at_price}</span>
      <span style="color: red; font-weight: 500;">${Math.ceil( (i.compare_at_price - i.price)/i.compare_at_price  * 100 )}% Off</span>
  </div>
 <button class="addTocart">Add To Cart</button>
</div>  `;
    
  
const space =document.getElementById('space');
space.insertAdjacentHTML('beforeend',ele); 
  
  })

}
loadData();


  






  