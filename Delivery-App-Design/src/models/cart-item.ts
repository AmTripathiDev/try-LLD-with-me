import MenuItem from "./menu-item";

class CartItem {
  private menuItem: MenuItem;
  private quantity: number;

  constructor(menuItem: MenuItem, quantity: number) {
    this.menuItem = menuItem;
    this.quantity = quantity;
  }

  getMenuItem() {
    return this.menuItem;
  }

  getQuantity() {
    return this.quantity;
  }

  setQuantity(quantity: number) {
    this.quantity = quantity;
  }
}

export default CartItem;