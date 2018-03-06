/* Global Variable to store cart items */
var cart = []

/* Array to store names of all scarves */ 
var scarves = ['Reversible Plaid', 'Fringed Plaid', 'Multi Color', 'Northern Lights', 'Ombre Infinity', 'Ashby Twill', 'Wool Cable Knit', 'Etro Paisley-Print Silk']

/* Global Variable to store total price in cart */
var totalPrice = []

/* Array to store prices of all scarves */
var prices = [26.99, 18.99, 22.99, 29.99, 11.99, 70.99, 49.99, 26.99]


/********************************************/
/* Function to Round to a predetermined number of decimals */
/* The rounding problem can be avoided by using numbers represented in exponential notation */
function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}


/********************************************/
/* Adds and removes items to cart as needed */
function updateCart(itemNum){
  event.preventDefault()

  console.log('Scarf: ' + scarves[itemNum] + ' - $' + prices[itemNum]);
  
  // see if scarf is already in cart
  var i = cart.indexOf(scarves[itemNum])
  if (i == -1){
    // if not, insert scarf into cart
    cart.push(scarves[itemNum])
    console.log(scarves[itemNum] + " added to cart")
    // add price to cart
    totalPrice.push(prices[itemNum])
  } else {
    // else, remove scarf from cart
    var index = cart.indexOf(scarves[itemNum]);
    cart.splice(index, 1);
    console.log(scarves[itemNum] + " removed from cart")
    // remove price from cart
    totalPrice.splice(index, 1)
  }
  
  /* Calculate total price in cart */
  var priceInCart=0;
  for(var i in totalPrice) { priceInCart += totalPrice[i]; }
  priceInCart = round(priceInCart, 2);
  
  /* Display size of cart */
  console.log('Cart size: ' + cart.length + ', Total Price: $' + priceInCart);
}