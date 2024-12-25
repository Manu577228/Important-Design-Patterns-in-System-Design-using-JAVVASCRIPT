// Explanation:
// The Adapter pattern allows incompatible interfaces to work together by converting one interface into another that a client expects.

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

// Adapter Pattern Example 1: Power Socket Adapter
class USASocket {
  plugIn() {
    return "120V from USA socket";
  }
}

class EuropeSocket {
  plugIn() {
    return "240V from Europe socket";
  }
}

class SocketAdapter {
  constructor(socket) {
    this.socket = socket; // Accept a socket instance
  }

  getVoltage() {
    return this.socket.plugIn(); // Adapt the plugIn method
  }
}

let usaSocket = new USASocket();
let adapter = new SocketAdapter(usaSocket);
console.log(adapter.getVoltage());
// Output: 120V from USA socket

let europeSocket = new EuropeSocket();
adapter = new SocketAdapter(europeSocket);
console.log(adapter.getVoltage());
// Output: 240V from Europe socket
