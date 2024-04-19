/*
  Payment class is introduced to encapsulate payment-related functionality. The class includes 
  the payment exception of the time expired or price changes due to the time changes
 */
class PaymentTimeoutException extends Error {
  constructor(message?: string) {
    super(message || "Payment timeout");
    this.name = "PaymentTimeoutException";
  }
}

class PaymentFailureException extends Error {
  constructor(message?: string) {
    super(message || "Payment failure due to price volatility");
    this.name = "PaymentFailureException";
  }
}

class InvoicePayment {
  private timestamp: number;
  private price: number;

  constructor() {
    this.timestamp = Date.now();
    this.price = INVOICE_PRICE;
    this.currency = INVOICE_CURRENCY;
  }

  processPayment(): void {
    // payment processing with a random outcome
    // Raise exceptions based on random probability

    // payment timeout
    if (paymentTimeout()) {
      throw new PaymentTimeoutException();
    }

    // payment failure due to price volatility
    if (paymentPriceNotMatched()) {
      throw new PaymentFailureException();
    }

    // Payment successful if no exceptions are thrown
    console.log("Payment successful");
  }

  checkPaymentStatus(): void {
    const currentTime = Date.now();
    const elapsedTime = currentTime - this.timestamp;
    
    if (elapsedTime > 1 * 60 * 60 * 1000) { // 1 hour
      throw new PaymentTimeoutException("Payment expired");
    }

    paymentProcessing()    
  }

  refreshTimestampAndPrice(): void {
    this.timestamp = Date.now();
    this.price = this.generateNewPrice();
    console.log("Timestamp and price refreshed");
  }

  private generateNewPrice(): number {
    // refresh the price due to the price fluctuation
    return refreshPrice(this.currency)
  }
}
