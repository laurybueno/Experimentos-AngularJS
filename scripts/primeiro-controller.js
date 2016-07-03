angular.module('aplicacao').controller('PrimeiroController', function($scope, $filter){

	$scope.nome = 'Laury Bueno';
	var nome = 'outra coisa';

	$scope.iniciado = true;

	$scope.alunos = [{'nome': 'Aluno 1', 'idade': 9},
									{'nome':'Aluno 2', 'idade': 11},
									{'nome':'Aluno 3', 'idade':15}];

	$scope.finalizar = function(){
		$scope.iniciado = false;
	};

	$scope.iniciar = function(){
		$scope.iniciado = true;
	};

	$scope.hoje = new Date();

	$scope.filtroNome = function(){
		$scope.ordenarPorNome = !$scope.ordenarPorNome;
		$scope.alunos = $filter('orderBy')($scope.alunos, 'nome', $scope.ordenarPorNome);
	}

	$scope.filtroIdade = function(){
		$scope.ordenarPorIdade = !$scope.ordenarPorIdade;
		$scope.alunos = $filter('orderBy')($scope.alunos, 'idade', $scope.ordenarPorIdade);
	}


	$scope.submeter = function(){
		if($scope.form_1.$valid){
			novo_aluno = {};
			novo_aluno['nome'] = $scope.nome_aluno;
			novo_aluno['idade'] = parseInt($scope.idade_aluno);
			$scope.alunos.push(novo_aluno);
		} else {
			alert('Preencha o nome corretamente.');
		}
	};

});
