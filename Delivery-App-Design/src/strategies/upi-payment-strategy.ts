import Payment from "./payment-strategy";

class UPIpayment extends Payment {
  private upiId: string;

  constructor(amount: number, upiId: string) {
    super(amount);
    this.upiId = upiId;
  }

  processPayment(): boolean {
    return true;
  }
}

export default UPIpayment;