# Delivery App Design

A TypeScript low-level design exercise that models the core checkout flow of a food delivery application.

## Features

- Register restaurants and their menu items.
- Create a separate cart for each user.
- Add, update, and remove cart items.
- Calculate totals from item prices and quantities.
- Create an order with a restaurant, delivery address, and payment strategy.
- Switch between UPI and credit card payment implementations.

## Design Patterns

### Singleton

`RestaurantManager` owns the restaurant registry and exposes a single shared instance through `getInstance()`.

### Strategy

`Payment` defines the payment contract. `UPIpayment` and `CreditCardPayment` provide interchangeable implementations, while `Order` depends only on the abstract contract.

## Main Components

| Component | Responsibility |
| --- | --- |
| `RestaurantManager` | Maintains the shared restaurant registry. |
| `Restaurant` | Stores restaurant details and menu items. |
| `MenuItem` | Represents an item and its price. |
| `CartItem` | Associates a menu item with a quantity. |
| `UserCart` | Manages cart items and calculates the total. |
| `User` | Owns and delegates operations to a cart. |
| `Order` | Collects order details and initiates payment. |
| `Payment` | Defines the interface for payment strategies. |

## Application Flow

1. Create restaurants and add menu items.
2. Register the restaurants with `RestaurantManager`.
3. Create users with independent carts.
4. Select a restaurant and add items to each cart.
5. Calculate each cart total.
6. Build an order and assign a payment strategy.
7. Process the payment through the order.

## Project Structure

```text
src/
├── manager/
│   └── RestaurantManager.ts
├── models/
│   ├── cart-item.ts
│   ├── menu-item.ts
│   └── restaurant.ts
├── services/
│   ├── cart.ts
│   ├── order.ts
│   └── user.ts
├── strategies/
│   ├── credit-card-strategy.ts
│   ├── payment-strategy.ts
│   └── upi-payment-strategy.ts
└── index.ts
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Install and Run

```bash
npm install
npm start
```

`npm start` compiles the TypeScript source into `dist/` and runs the example from `dist/index.js`.

Example output:

```text
Total Price for User 1: $8.99
Total Price for User 2: $9.99
```

## Current Scope

This project focuses on object relationships and design patterns. Payment strategies currently simulate successful processing; persistence, restaurant search, inventory, order status, and external payment integrations are outside the current scope.