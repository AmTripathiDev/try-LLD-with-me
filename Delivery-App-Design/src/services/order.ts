import Payment from "../strategies/payment-strategy";
import CartItem from "../models/cart-item";
import Restaurant from "../models/restaurant";
import User from "../services/user";

class Order {
  private id: string;
  private restaurant: Restaurant | null = null;
  private items = [] as CartItem[];
  private payment: Payment | null = null;
  private address: string = "";
  private currentUser: User | null = null;

  constructor(id: string) {
    this.id = id;
  }

  setRestaurant(restaurant: Restaurant) {
    this.restaurant = restaurant;
  }

  addItem(item: CartItem) {
    this.items.push(item);
  }

  setPayment(payment: Payment) {
    this.payment = payment;
  }

  setAddress(address: string) {
    this.address = address;
  }

  setUser(user: User) {
    this.currentUser = user;
  }

  createPayment() {
    this.payment?.processPayment();
  }
}


export default Order