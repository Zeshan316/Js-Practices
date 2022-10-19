import "./styles.css";

function Box(value) {
  this.value = value;
}
Box.prototype.getValue = function () {
  return this.value;
};

console.log(Object.getPrototypeOf(new Box()));
console.log(Box.prototype);

const boxes = [new Box(1), new Box(2), new Box(3)];

console.log(boxes[1].getValue());
