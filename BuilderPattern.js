// Explanation:
// The Builder pattern constructs complex objects step by step, allowing for more flexibility than constructors.

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

// Builder Pattern Example 1: Building a Car
class CarBuilder {
  constructor() {
    this.car = {}; // Initialize an empty car object
  }

  addEngine(type) {
    this.car.engine = type; // Add engine type
    return this; // Return builder for chaining
  }

  addColor(color) {
    this.car.color = color; // Add car color
    return this;
  }

  addSeats(count) {
    this.car.seats = count; // Add number of seats
    return this;
  }

  build() {
    return this.car; // Return the fully built car
  }
}

let car = new CarBuilder().addEngine("V8").addColor("Red").addSeats(4).build();

console.log(car);
// Output: { engine: 'V8', color: 'Red', seats: 4 }
