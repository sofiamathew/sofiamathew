
let button1 = document.querySelector("#button1");
   button1.addEventListener("click", addNode);
console.log(button1);
function addNode(){
  
   let list = document.getElementsByTagName('ul')[0]; 
    
   let product = document.createElement('li'); 
   let product_a = document.createElement('a'); 
   product_a.href="product.html";
   console.log(product_a);
   var product_menu = document.createTextNode('product'); 
   product_a.appendChild(product_menu);
   product.appendChild(product_a);
   list.appendChild(product);
   
   let about = document.createElement('li'); 
   let about_a = document.createElement('a'); 
   about_a.href="../index.html";
  
   var aboutmenu = document.createTextNode('about'); 
   about_a.appendChild(aboutmenu);
   about.appendChild(about_a);
   list.appendChild(about); 
   console.log(list);
}
 