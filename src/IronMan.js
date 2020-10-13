var IronMan = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer iron-man"></span>');
  this.flewLeft = true;
  this.step();
};

IronMan.prototype = Object.create(makeDancer.prototype);
IronMan.prototype.constructor = IronMan;

IronMan.prototype.step = function () {
  if (this.flewLeft) {
    this.$node.animate({
      right: '200px'
    })
    this.flewLeft = false;
  } else {
    this.$node.animate({
      left: '200px'
    })
    this.flewLeft = true;
  }

  makeDancer.prototype.step.call(this);
};