const Group = function() {
  this.members = [];
}

Group.prototype.add = function(member) {
  if (!this.has(member)) {
    this.members.push(member);
  }
}

Group.prototype.has = function(member) {
  return this.members.includes(member);
}

Group.from = function(collection) {
  const group = new Group();

  for(let i = 0; i < collection.length; i++) {
    group.add(collection[i]);
  }
  return group;
}

const group = Group.from([1, 2, 3, 4, 5]);
console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
console.log(group.has(5)); // true
console.log(group.has(10)); // false

group.add(10);
console.log(group);
console.log(group.has(10)); // true
