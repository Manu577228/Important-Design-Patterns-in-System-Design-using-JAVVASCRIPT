// Explanation:
// The Prototype pattern creates new objects by cloning an existing object, promoting reuse and efficiency.

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

// Prototype Pattern Example 1: Object Cloning
let original = {
  name: "Prototype",
  greet() {
    console.log(`Hello, I am ${this.name}`);
  },
};

let clone = Object.create(original); // Clone the original object
clone.name = "Clone"; // Customize the clone's properties

original.greet(); // Output: Hello, I am Prototype
clone.greet(); // Output: Hello, I am Clone
