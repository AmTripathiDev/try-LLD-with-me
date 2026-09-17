import UserCart from "./cart";
import CartItem from "../models/cart-item";
import Restaurant from "../models/restaurant";

class User {
  private cart: UserCart;
  private userId: string;

  constructor(userCart: UserCart, userId: string) {
    this.cart = userCart;
    this.userId = userId;
  }

  getCart() {
    return this.cart;
  }

  addItem(item: CartItem) {
    this.cart.addItem(item);
  }

  setRestaurant(restaurant: Restaurant) {
    this.cart.setRestaurant(restaurant);
  }

  removeItem(item: CartItem) {
    this.cart.removeItem(item);
  }
}

export default User;
