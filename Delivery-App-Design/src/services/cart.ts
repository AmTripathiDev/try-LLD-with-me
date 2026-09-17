import CartItem from "../models/cart-item";
import Restaurant from "../models/restaurant";

class UserCart {
  private items = [] as CartItem[];
  private Restaurant: Restaurant | null = null;

  constructor() {
    this.items = [];
    this.Restaurant = null;
  }

  setRestaurant(restaurant: Restaurant) {
    this.Restaurant = restaurant;
  }

  removeItem(item: CartItem) {
    const index = this.items.findIndex(
      (cartItem) => cartItem.getMenuItem() === item.getMenuItem(),
    );
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  addItem(item: CartItem) {
    const existingCartItem = this.items.find(
      (cartItem) => cartItem.getMenuItem() === item.getMenuItem(),
    );
    if (existingCartItem) {
      existingCartItem.setQuantity(existingCartItem.getQuantity() + 1);
    } else {
      this.items.push(item);
    }
  }

  calculateTotal(): number {
    return this.items.reduce(
      (total, cartItem) =>
        total + cartItem.getMenuItem().getPrice() * cartItem.getQuantity(),
      0,
    );
  }
}

export default UserCart;