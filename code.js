const menuItems = [
  {
  id:1,
  name:"Veg Biryani",
  category:"Veg",
  price:12.99,
  image:"images/veg-biryani.jpg"
  },
  {
  id:2,
  name:"Paneer Tikka",
  category:"Veg",
  price:10.99,
  image:"images/paneer-tikka.jpg"
  },
  {
  id:3,
  name:"Chicken Biryani",
  category:"Non-Veg",
  price:15.99,
  image:"images/chicken-biryani.jpg"
  },
  {
  id:4,
  name:"Burger",
  category:"Non-Veg",
  price:9.99,
  image:"images/burger.jpg"
  },
  {
  id:5,
  name:"Chocolate Cake",
  category:"Dessert",
  price:7.99,
  image:"images/cake.jpg"
  },
  {
  id:6,
  name:"Ice Cream",
  category:"Dessert",
  price:5.99,
  image:"images/icecream.jpg"
  }
  ];
  
  let cart =
  JSON.parse(localStorage.getItem("foodMunchCart")) || [];
  
  function renderMenu(items){
  
  const container =
  document.getElementById("menuContainer");
  
  container.innerHTML="";
  
  items.forEach(item=>{
  
  container.innerHTML += `
  <div class="card">
  <img
  src="${item.image}"
  alt="${item.name}"
  onerror="this.src='https://via.placeholder.com/400x250?text=Food+Image'"
  >
  
  <div class="card-content">
  <h3>${item.name}</h3>
  <p>${item.category}</p>
  <p>$${item.price}</p>
  
  <button onclick="addToCart(${item.id})">
  Add To Cart
  </button>
  </div>
  </div>
  `;
  });
  }
  
  function addToCart(id){
  
  const item =
  menuItems.find(food=>food.id===id);
  
  cart.push(item);
  
  localStorage.setItem(
  "foodMunchCart",
  JSON.stringify(cart)
  );
  
  renderCart();
  }
  
  function renderCart(){
  
  const cartItems =
  document.getElementById("cartItems");
  
  const totalElement =
  document.getElementById("cartTotal");
  
  cartItems.innerHTML="";
  
  let total=0;
  
  cart.forEach((item,index)=>{
  
  total += item.price;
  
  cartItems.innerHTML += `
  <div class="cart-item">
  
  <div>
  <strong>${item.name}</strong>
  <p>$${item.price}</p>
  </div>
  
  <button
  class="remove-btn"
  onclick="removeItem(${index})">
  Remove
  </button>
  
  </div>
  `;
  });
  
  totalElement.innerHTML =
  "Total: $" + total.toFixed(2);
  }
  
  function removeItem(index){
  
  cart.splice(index,1);
  
  localStorage.setItem(
  "foodMunchCart",
  JSON.stringify(cart)
  );
  
  renderCart();
  }
  
  function filterMenu(category){
  
  if(category==="All"){
  renderMenu(menuItems);
  return;
  }
  
  const filtered =
  menuItems.filter(
  item => item.category === category
  );
  
  renderMenu(filtered);
  }
  
  document
  .getElementById("searchInput")
  .addEventListener("keyup",function(){
  
  const value =
  this.value.toLowerCase();
  
  const filtered =
  menuItems.filter(item =>
  item.name.toLowerCase().includes(value)
  );
  
  renderMenu(filtered);
  });
  
  function scrollToMenu(){
  
  document
  .getElementById("menu")
  .scrollIntoView({
  behavior:"smooth"
  });
  }
  
  renderMenu(menuItems);
  renderCart();