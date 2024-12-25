// Explanation:
// The Proxy pattern provides a placeholder for another object to control access, caching, or additional logic.

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

// Proxy Pattern Example 1: Virtual Proxy for Heavy Object
class HeavyObject {
  load() {
    console.log("Loading heavy object...");
  }
}

class Proxy {
  constructor() {
    this.realObject = null; // Delays instantiation
  }

  load() {
    if (!this.realObject) {
      this.realObject = new HeavyObject(); // Create the heavy object when needed
    }
    this.realObject.load();
  }
}

let proxy = new Proxy();
proxy.load();
// Output: Loading heavy object...
proxy.load();
// Output: Loading heavy object...
