var BlackWidow = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer black-widow"><img src = "./img/black-widow.png"></img></span>')
  this.top = top;
  this.left = left;
  this.step();
  this.setPosition(this.top, this.left);
};

BlackWidow.prototype = Object.create(makeDancer.prototype);
BlackWidow.prototype.constructor = BlackWidow;

BlackWidow.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};


