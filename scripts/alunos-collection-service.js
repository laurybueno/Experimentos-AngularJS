angular.module('aplicacao').service('AlunosCollectionService', function($filter){

  var ordenarPorNome = false;
  var ordenarPorIdade = false;

  var alunos = [{'nome': 'Aluno 1', 'idade': 9},
									{'nome':'Aluno 2', 'idade': 11},
									{'nome':'Aluno 3', 'idade':15}];


  this.getAlunos = function(){
    return alunos;
  };

  this.adicionarAluno = function(aluno){
    alunos.push(aluno);
  }

  this.filtroNome = function(){
		ordenarPorNome = !ordenarPorNome;
		alunos = $filter('orderBy')(alunos, 'nome', ordenarPorNome);
	}

	this.filtroIdade = function(){
		ordenarPorIdade = !ordenarPorIdade;
		alunos = $filter('orderBy')(alunos, 'idade', ordenarPorIdade);
	}

});
