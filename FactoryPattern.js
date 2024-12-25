// Explanation:
// The Factory pattern provides an interface to create objects without specifying the exact class of object that will be created.

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

// Factory Pattern Example 1: Shape Factory
class ShapeFactory {
  static createShape(type) {
    if (type === "circle") {
      return { type: "circle", draw: () => console.log("Drawing a Circle") };
    } else if (type === "square") {
      return { type: "square", draw: () => console.log("Drawing a Square") };
    }
    throw new Error("Unknown shape type");
  }
}

let circle = ShapeFactory.createShape("circle"); // Create a circle object
let square = ShapeFactory.createShape("square"); // Create a square object

circle.draw(); // Output: Drawing a Circle
square.draw(); // Output: Drawing a Square
