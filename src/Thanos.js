var Thanos = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer thanos"><img src = "./img/thanos.gif"></img></span>')
  this.step();
  this.setPosition(this.top, this.left);
};

Thanos.prototype = Object.create(makeDancer.prototype);
Thanos.prototype.constructor = Thanos;

Thanos.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  //this.$node.toggle();
};