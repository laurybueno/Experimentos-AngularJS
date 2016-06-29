angular.module('aplicacao').controller('PrimeiroController', function($scope){
	
	$scope.nome = 'Laury Bueno';
	var nome = 'outra coisa';
	
	$scope.iniciado = true;
	
	$scope.alunos = ['Aluno 1', 'Aluno 2', 'Aluno 3'];
	
	$scope.finalizar = function(){
		$scope.iniciado = false;
	};
	
	$scope.iniciar = function(){
		$scope.iniciado = true;
	};
	
	
	$scope.submeter = function(){
		$scope.alunos.push($scope.nome_aluno);
	};
	
});
