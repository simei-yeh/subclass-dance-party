var SpiderMan = function (top, left) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer spider-man"></span>')
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = 1000;
  this.step();
};

SpiderMan.prototype = Object.create(makeDancer.prototype);
SpiderMan.prototype.constructor = SpiderMan;

SpiderMan.prototype.step = function () {
  this.$node.animate({
    height: 'toggle'
  });
  makeDancer.prototype.step.call(this);
};


