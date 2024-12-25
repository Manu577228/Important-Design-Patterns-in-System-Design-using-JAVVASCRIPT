// Explanation:
// The Singleton pattern ensures that a class has only one instance and provides a global point of access to it.

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

// Singleton Pattern Example 1: Lazy Initialization
class Singleton {
  static instance;

  constructor(value) {
    if (Singleton.instance) {
      return Singleton.instance; // Return existing instance if already created
    }
    this.value = value; // Set value for the singleton instance
    Singleton.instance = this; // Cache the instance for future use
  }

  getValue() {
    return this.value; // Return the value of the singleton instance
  }
}

let s1 = new Singleton("First Instance"); // Create the first instance
let s2 = new Singleton("Second Instance"); // Attempt to create a second instance

console.log(s1.getValue()); // Output: First Instance (singleton ensures only one instance exists)
console.log(s1 === s2); // Output: true (both references point to the same instance)
