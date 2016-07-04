angular.module('aplicacao').controller('PrevisaoTempoController', function($scope, $resource){
  var Clima = $resource('http://api.openweathermap.org/data/2.5/weather?q=SaoPaulo,BR&units=metric&APPID=d8787d43b951770a7e8fdf315f879ef8');

  var getClima = function() {
    Clima.get().$promise.then(
      function(response){
        $scope.tempo = response;
        console.log(response);
    }, function(promise){
      alert("Houve um erro ao tentar receber dados de clima");
    })
  };

  getClima();

});
