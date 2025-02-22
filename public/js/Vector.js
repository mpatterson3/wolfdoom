function Vector(x,y) {
    this.x = x;
    this.y = y;
}
Vector.prototype.add = function(v) {
    return new Vector(this.x + v.x, this.y + v.y);
};
Vector.prototype.subtract = function(v) {
    return new Vector(this.x - v.x, this.y - v.y);
};
Vector.prototype.multiply = function(scalar) {
    return new Vector(this.x * scalar, this.y * scalar);
};
Vector.prototype.divide = function(scalar) {
    return new Vector(this.x / scalar, this.y / scalar);
};
Vector.prototype.magnitude = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
};
Vector.prototype.normalize = function() {
    return this.divide(this.magnitude());
};
Vector.prototype.limit = function(max) {
    if (this.magnitude() > max) {
        return this.normalize().multiply(max);
    }
    return this;
};
Vector.prototype.distance = function(v) {
    return this.subtract(v).magnitude();
};
Vector.prototype.angle = function() {
    return Math.atan2(this.y, this.x);
};
Vector.prototype.angleBetween = function(v) {
    return Math.acos(this.dot(v) / (this.magnitude() * v.magnitude()));
};
Vector.prototype.dot = function(v) {
    return this.x * v.x + this.y * v.y;
};
Vector.prototype.project = function(v) {
    return v.multiply(this.dot(v) / v.dot(v));
};
Vector.prototype.reflect = function(v) {
    return this.subtract(v.multiply(2).multiply(this.dot(v) / v.dot(v)));
};
Vector.prototype.rotate = function(angle) {
    return new Vector(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle));
};
Vector.prototype.toString = function() {
    return "(" + this.x + ", " + this.y + ")";
};
Vector.prototype.copy = function() {
    return new Vector(this.x, this.y);
};
Vector.prototype.zero = function() {
    this.x = 0;
    this.y = 0;
};
Vector.prototype.set = function(x, y) {
    this.x = x;
    this.y = y;
};
Vector.prototype.equals = function(v) {
    return this.x === v.x && this.y === v.y;
};

