export default function renderItems() {
  var compiled = require('./items.html');
  var items = [
    { show: true, value: 1 },
    { show: false, value: 2 },
    { show: true, value: 3 },
  ]
  return compiled({items});
}