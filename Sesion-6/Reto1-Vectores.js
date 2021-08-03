const Vec = function(x, y) {
  this.x = x;
  this.y = y;
}

Vec.prototype.plus = function(vector) {
  return new Vec(this.x + vector.x, this.y + vector.y);
}

Vec.prototype.minus = function(vector) {
  return new Vec(this.x - vector.x, this.y - vector.y);
}

Vec.prototype.length = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
}

const vec1 = new Vec(1, 2);
const vec2 = new Vec(2, 3);

console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
console.log(vec1.length()); // 2.23606797749979



// const Vec = function(x, y) {
//   this.x = x;
//   this.y = y;
//   this.plus = function(other){
//     return new Vec(this.x + other.x, this.y + other.y);
//   }

//   this.minus = function(other){
//     return new Vec(this.x - other.x, this.y - other.y);
//   }

//   this.length = function(other) {
//     return Math.sqrt(this.x * this.x + this.y * this.y);
//   }
// }
// const vec1 = new Vec(1, 2);
// const vec2 = new Vec(2, 3);

// console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
// console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
// console.log(vec1.length()); // 2.23606797749979

