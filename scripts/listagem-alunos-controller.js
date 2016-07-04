angular.module('aplicacao').controller('ListagemAlunosController', function($scope, $filter, AlunosCollectionService){

	$scope.nome = 'Laury Bueno';
	var nome = 'outra coisa';

	$scope.iniciado = true;

	$scope.alunos = AlunosCollectionService.getAlunos();

	$scope.finalizar = function(){
		$scope.iniciado = false;
	};

	$scope.iniciar = function(){
		$scope.iniciado = true;
	};

	$scope.hoje = new Date();

	$scope.filtroNome = function(){
		AlunosCollectionService.filtroNome();
		$scope.alunos = AlunosCollectionService.getAlunos();
	}

	$scope.filtroIdade = function(){
		AlunosCollectionService.filtroIdade();
		$scope.alunos = AlunosCollectionService.getAlunos();
	}

});
