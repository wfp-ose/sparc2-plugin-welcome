geodash.controllers["SPARCControllerModalWelcome"] = function(
  $scope, $element, $controller, $interpolate, state, map_config, live)
{
  angular.extend(this, $controller('GeoDashControllerModal', {$element: $element, $scope: $scope}));
  var m = $.grep(geodash.meta.modals, function(x, i){ return x['name'] == 'sparc_welcome';})[0];
  $scope.config = m.config;
  $scope.ui = m.ui;
  $scope.showOptions = geodash.ui.showOptions;
  $scope.updateValue = geodash.api.updateValue;

  $scope.country = geodash.initial_state.iso3;
  $scope.hazard = geodash.initial_state.hazard;

  $scope.clearSelection = function(id)
  {
    $("#"+id).val(null);
    $("#"+id).typeahead("close");
  };
};
