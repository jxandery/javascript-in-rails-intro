$(document).ready(function() {

  var $stateFilterDropDown = $('#robot_filter_state');

  $robot_filter_state.on('change', function() {
    var currentState = this.value;
    if (!currentState) { return $('robot').show(); }
    $('.robot').each(function(index, robot) {
      var isInState = $(robot).data('state') === currentState;
      $(robot).toggle(isInState);
    });
  });

});
