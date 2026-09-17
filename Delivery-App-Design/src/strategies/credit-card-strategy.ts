import Payment from "./payment-strategy";

class CreditCardPayment extends Payment {
  private cardNumber: string;
  private cardHolderName: string;
  private expiryDate: string;

  constructor(
    amount: number,
    cardNumber: string,
    cardHolderName: string,
    expiryDate: string,
  ) {
    super(amount);
    this.cardNumber = cardNumber;
    this.cardHolderName = cardHolderName;
    this.expiryDate = expiryDate;
  }

  processPayment(): boolean {
    // Implement credit card payment processing logic here
    return true;
  }
}

export default CreditCardPayment;