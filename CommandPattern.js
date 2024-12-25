// Explanation:
// The Command pattern encapsulates a request as an object, allowing for parameterization of requests and queuing.

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

// Command Pattern Example 1: Smart Home Commands
class Light {
  turnOn() {
    console.log("Light is ON");
  }
  turnOff() {
    console.log("Light is OFF");
  }
}

class Command {
  constructor(receiver, action) {
    this.receiver = receiver; // The object to act upon
    this.action = action; // The action to perform
  }

  execute() {
    this.receiver[this.action](); // Invoke the action on the receiver
  }
}

let light = new Light();
let turnOnCommand = new Command(light, "turnOn");
let turnOffCommand = new Command(light, "turnOff");

turnOnCommand.execute(); // Output: Light is ON
turnOffCommand.execute(); // Output: Light is OFF
