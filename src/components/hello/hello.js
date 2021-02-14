export default function sayHello() {
  var compiled = require('./hello.html');
  return compiled({name: "world"});
}
