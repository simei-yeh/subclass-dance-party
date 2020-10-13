var DoctorStrange = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer doctor-strange"><img src = "./img/doctor-strange.jpg"></img></span>')
  this.step();
  this.setPosition(this.top, this.left);
};

DoctorStrange.prototype = Object.create(makeDancer.prototype);
DoctorStrange.prototype.constructor = DoctorStrange;

DoctorStrange.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};