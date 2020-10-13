var IronMan = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer iron-man"><img src = "./img/iron-man.jpg"></img></span>');
  this.flewLeft = true;
  this.step();
  this.setPosition(this.top, this.left);
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