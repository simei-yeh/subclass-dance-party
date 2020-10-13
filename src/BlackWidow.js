var BlackWidow = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer black-widow"></span>')
  this.top = top;
  this.left = left;
  this.step();
};

BlackWidow.prototype = Object.create(makeDancer.prototype);
BlackWidow.prototype.constructor = BlackWidow;

BlackWidow.prototype.step = function () {
  makeDancer.prototype.step.call(this);
};


