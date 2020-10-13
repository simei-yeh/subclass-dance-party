var IronMan = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left);
  this.$node = $('<span class="dancer iron-man"><img src = "./img/iron-man.gif"></img></span>');
  this.flewLeft = true;
  this.timeBetweenSteps = 0;
  this.step();
  this.setPosition(this.top, this.left);
};

IronMan.prototype = Object.create(makeDancer.prototype);
IronMan.prototype.constructor = IronMan;

IronMan.prototype.step = function () {
  var current = this;
  current.setPosition(this.top, this.left);
  current.$node.css({'transform': 'rotateY(0deg)'});
  current.$node.animate({ left: '+=200px', top: '-=100px' },
  {
    duration: 1000,
    complete: function() {
      current.setPosition(this.top, this.left);
      current.$node.css({'transform': 'rotateY(180deg) rotate(90deg)'});
      current.$node.animate({ left: '-=200px', top: '+=100px' },
      {
        duration: 1000,
        complete: function() {
          current.setPosition(this.top, this.left);
          makeDancer.prototype.step.call(current);
        }
      })
    }
  })
};