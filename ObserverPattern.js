// Explanation:
// The Observer pattern allows an object (subject) to maintain a list of dependents (observers) that it notifies of any state changes.

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
/*    Github :  https://github.com/Manu577228                  */
/* ----------------------------------------------------------- */

// Observer Pattern Example 1: Newsletter Subscription
class Newsletter {
  constructor() {
    this.subscribers = []; // List of subscribers
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber); // Add subscriber
  }

  notify(message) {
    this.subscribers.forEach((sub) => sub.update(message)); // Notify all subscribers
  }
}

class Subscriber {
  constructor(name) {
    this.name = name; // Name of the subscriber
  }

  update(message) {
    console.log(`${this.name} received: ${message}`); // Print the received message
  }
}

let newsletter = new Newsletter();
let alice = new Subscriber("Alice");
let bob = new Subscriber("Bob");

newsletter.subscribe(alice); // Alice subscribes
newsletter.subscribe(bob); // Bob subscribes

newsletter.notify("New edition available!");
// Output:
// Alice received: New edition available!
// Bob received: New edition available!
