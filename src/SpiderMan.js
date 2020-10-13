var SpiderMan = function (top, left) {
  makeDancer.call(this, top, left);
  this.$node = $('<span class="dancer spider-man"><img src = "./img/spider-man.gif"><span class = "speech-bubble hidden">I don\'t feel so good Mr\. Stark</span></img></span>')
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = 1000;
  this.step();
  this.setPosition(this.top, this.left);
};

SpiderMan.prototype = Object.create(makeDancer.prototype);
SpiderMan.prototype.constructor = SpiderMan;

SpiderMan.prototype.step = function () {
};

