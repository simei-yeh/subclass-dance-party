describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  it('should line the dancer up to 250px from top', function() {
    blinkyDancer.lineUp();
    expect(blinkyDancer.top).to.be.equal(250);
  });


  it('should move closer to the input position', function() {
    //let newTop = this.top + (top - this.top) * 0.7;
    blinkyDancer.attack(100,100);
    expect(blinkyDancer.top).to.be.equal(73);
    expect(blinkyDancer.left).to.be.equal(76);
  });



  it('should stay the same position', function() {
    //let newTop = this.top + (top - this.top) * 0.7;
    blinkyDancer.attack(500,500);
    expect(blinkyDancer.top).to.be.equal(10);
    expect(blinkyDancer.left).to.be.equal(20);
  });


  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      //debugger;
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      //debugger;
      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});
