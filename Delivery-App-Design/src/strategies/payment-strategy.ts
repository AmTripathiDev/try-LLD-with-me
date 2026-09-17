export default abstract class Payment {
  protected amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  abstract processPayment(): boolean;
}
