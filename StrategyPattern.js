// Explanation:
// The Strategy pattern allows selecting an algorithm's behavior at runtime by encapsulating it in separate classes.

/* -------------------------------------------------------- */
/*   ( The Authentic JS CodeBuff )
 ___ _                      _              _ 
 | _ ) |_  __ _ _ _ __ _ __| |_ __ ____ _ (_)
 | _ \ ' \/ _` | '_/ _` / _` \ V  V / _` || |
 |___/_||_\__,_|_| \__,_\__,_|\_/\_/\__,_|/ |
                                        |__/ 
 */
/* ---------------------------------------------------------   */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj        */
/*    Github : https://github.com/Manu577228                  */
/* ----------------------------------------------------------- */

// Strategy Pattern Example 1: Payment Strategies
class CreditCardPayment {
  pay(amount) {
    console.log(`Paid ${amount} using Credit Card.`);
  }
}

class PayPalPayment {
  pay(amount) {
    console.log(`Paid ${amount} using PayPal.`);
  }
}

class PaymentProcessor {
  setStrategy(strategy) {
    this.strategy = strategy; // Set payment strategy
  }

  executePayment(amount) {
    this.strategy.pay(amount); // Execute payment
  }
}

let paymentProcessor = new PaymentProcessor();

paymentProcessor.setStrategy(new CreditCardPayment());
paymentProcessor.executePayment(100); // Output: Paid 100 using Credit Card.

paymentProcessor.setStrategy(new PayPalPayment());
paymentProcessor.executePayment(200); // Output: Paid 200 using PayPal.
