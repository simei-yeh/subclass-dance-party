// Creates and returns a new dancer object that can step
var makeDancer = function (top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  //this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

};

makeDancer.prototype.step = function () {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  let instance = this;

  setTimeout(function() {
    instance.step();
  }, this.timeBetweenSteps);

};

makeDancer.prototype.setPosition = function (top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


makeDancer.prototype.lineUp = function(){
  this.top = 250;
  this.setPosition(this.top, this.left);
}


makeDancer.prototype.breakUp = function(top, left){
  this.top = top;
  this.left = left;
  this.setPosition(this.top, this.left);
}


makeDancer.prototype.attack = function(top, left){
  let distance = Math.abs(this.top - top) + Math.abs(this.left - left);

  if (distance < 800) {
    let topMovement = (top - this.top) * 0.7;
    let leftMovement = (left - this.left) * 0.7;

    this.$node.animate({top: '+=' + topMovement + 'px', left: '+= ' + leftMovement +'px'}, {duration: 2000})
    this.top = this.top + topMovement;
    this.left = this.left + leftMovement;

    //this.setPosition(this.top, this.left);
  }
}