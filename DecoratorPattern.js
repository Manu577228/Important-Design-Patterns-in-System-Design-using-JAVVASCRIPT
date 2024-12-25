// Explanation:
// The Decorator pattern dynamically adds behaviors or responsibilities to an object without modifying its structure.

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

// Decorator Pattern Example 1: Adding Features to a Basic User
class User {
  constructor(name) {
    this.name = name; // Initialize user name
  }

  getDetails() {
    return this.name; // Return the user name
  }
}

function addRole(user, role) {
  user.role = role; // Add role property to the user
  let originalGetDetails = user.getDetails; // Preserve original method
  user.getDetails = function () {
    return `${originalGetDetails.call(this)}, Role: ${this.role}`; // Decorate method
  };
}

let user = new User("Alice");
addRole(user, "Admin"); // Add Admin role to the user

console.log(user.getDetails());
// Output: Alice, Role: Admin
