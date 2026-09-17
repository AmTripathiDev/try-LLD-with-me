// Here we are going to code Restaurant manager design App Since I am learning LLD here

// This is a single point of contact to interact with other class so that we do not want to create multiple instance of this class

import RestaurantManager from "./manager/RestaurantManager";
import UserCart from "./services/cart";
import Restaurant from "./models/restaurant";
import MenuItem from "./models/menu-item";
import CartItem from "./models/cart-item";
import User from "./services/user";
import Order from "./services/order";
import UPIpayment from "./strategies/upi-payment-strategy";

function initiateApp() {
  const vegRestaurant = new Restaurant("1", "Pizza Place", "123 Main St");
  const vegMenuItem = new MenuItem("2", "Veg Burger", 8.99);
  vegRestaurant.addMenuItem(vegMenuItem);

  const nonvegRestaurant = new Restaurant("2", "Burger Place", "456 Main St");
  const nonvegMenuItem = new MenuItem("3", "Chicken Burger", 9.99);
  nonvegRestaurant.addMenuItem(nonvegMenuItem);

  const restaurantManager = RestaurantManager.getInstance();
  restaurantManager.addRestaurant(vegRestaurant);
  restaurantManager.addRestaurant(nonvegRestaurant);


  const userCart = new UserCart();
  const userCart2 = new UserCart();

  const user1 = new User(userCart, "user-1");
  const user2 = new User(userCart2, "user-2");

  // For User 1
  user1.getCart().setRestaurant(vegRestaurant);
  user1.getCart().addItem(new CartItem(vegMenuItem, 1));

  // For User 2
  user2.getCart().setRestaurant(nonvegRestaurant);
  user2.getCart().addItem(new CartItem(nonvegMenuItem, 1));

  
  // Calculate and display total prices for both users
  
  const totalPrice = user1.getCart().calculateTotal();
  const totalPrice2 = user2.getCart().calculateTotal();
  console.log(`Total Price for User 1: $${totalPrice}`);
  console.log(`Total Price for User 2: $${totalPrice2}`);


  // Create User 1's Order

  const order1 = new Order("1");
  order1.setRestaurant(vegRestaurant);
  order1.addItem(new CartItem(vegMenuItem, 1));
  order1.setPayment(new UPIpayment(totalPrice, "user-upi-id"));
  order1.setAddress("123 Main St");

  order1.createPayment();

  // Create User 2's Order

  const order2 = new Order("2");
  order2.setRestaurant(nonvegRestaurant);
  order2.addItem(new CartItem(nonvegMenuItem, 1));
  order2.setPayment(new UPIpayment(totalPrice2, "user-upi-id"));
  order2.setAddress("456 Main St");

  order2.createPayment();
}

initiateApp();
