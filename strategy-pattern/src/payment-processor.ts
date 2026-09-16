// Here We will sove the strategy pattern example (Payment processing)

class PaymentProcessor {
  constructor(private strategy: PaymentStrategy) {}

  setStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  processPayment(amount: number) {
    this.strategy.processPayment(amount);
  }
}

abstract class PaymentStrategy {
  abstract processPayment(amount: number): void;
}

class CreditCardPayment extends PaymentStrategy {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment of $${amount}`);
  }
}

class PayPalPayment extends PaymentStrategy {
  processPayment(amount: number): void {
    console.log(`Processing PayPal payment of $${amount}`);
  }
}

function main() {
  const creditCardPayment = new CreditCardPayment();
  const payPalPayment = new PayPalPayment();

  const paymentProcessor = new PaymentProcessor(creditCardPayment);
  paymentProcessor.processPayment(100);

  paymentProcessor.setStrategy(payPalPayment);
  paymentProcessor.processPayment(200);
}

main();
