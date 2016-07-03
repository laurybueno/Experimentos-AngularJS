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

	$scope.hoje = new Date();


	$scope.submeter = function(){
		if($scope.form_1.$valid){
			$scope.alunos.push($scope.nome_aluno);
		} else {
			alert('Preencha o nome corretamente.');
		}

	};

});
