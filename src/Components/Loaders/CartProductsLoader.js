import { getShoppingCart } from "../../utilities/fakedb";

const cartProductsLoader = async () => {
   const loadedProducts = await fetch('products.json')
   const products = await loadedProducts.json()



   // take only products saved to cart

   const storedCart = getShoppingCart();

   let savedCart = [];

   for (const id in storedCart) {
      const storedCartProducts = products.find(pd => pd.id === id);
      if (storedCart) {
         const quantity = storedCart[id];
         storedCartProducts.quantity = quantity;
         savedCart.push(storedCartProducts);
      }
   }
   return savedCart;
}

export default cartProductsLoader