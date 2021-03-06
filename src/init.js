$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var classes = ['IronMan', 'SpiderMan', 'DoctorStrange','BlackWidow', 'Thanos'];
    //var classes = ['SpiderMan'];
    var dancerMakerFunctionName = classes[Math.floor(Math.random() * classes.length)];
    //var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // dancerMakerFunc = makeBlinkyDancer

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      ($("body").height()-100) * Math.random(),
      ($("body").width()-100) * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    attackThanos(dancer);
    $('body').append(dancer.$node);

  });

  const attackThanos = function(dancer) {
    if (dancer.constructor === Thanos) {
      for (let i = 0; i < window.dancers.length; i++) {
        if (window.dancers[i].constructor !== Thanos) {
          window.dancers[i].attack(dancer.top, dancer.left);
        }
      }
    }
  }

  $('.lineUpButton').on('click', function() {
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  $('.breakUpButton').on('click', function() {
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].breakUp(
        $("body").height() * Math.random(),
        $("body").width() * Math.random()
      );
      attackThanos(window.dancers[i]);
    }
  });

  $('.thanosButton').on('click', function() {
    var index = Math.floor(window.dancers.length * .75);
    for (let i = 0; i < index; i++) {
      var currentDancer = window.dancers[i];
      if (currentDancer.constructor !== Thanos) {
        if (currentDancer.constructor === SpiderMan) {
          $('.hidden').show();
        }
        currentDancer.$node.fadeOut();
      }
    }
  })

  $('.avengersButton').on('click', function() {
    var index = Math.floor(window.dancers.length * .75);
    for (let i = 0; i < index; i++) {
      var currentDancer = window.dancers[i];
      if (currentDancer.constructor !== Thanos) {
        if (currentDancer.constructor === SpiderMan) {
          $('.hidden').hide();
        }
        currentDancer.$node.fadeIn();
      }
    }
    for (let i = 0; i < window.dancers.length; i++) {
      var currentDancer = window.dancers[i];
      if (currentDancer.constructor === Thanos) {
        currentDancer.$node.fadeOut();
      }
    }
  })

});

