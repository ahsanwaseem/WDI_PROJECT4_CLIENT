angular
  .module('filmApp')
  .controller('FilmsShowCtrl', FilmsShowCtrl);

FilmsShowCtrl.$inject = ['Film', '$stateParams'];
function FilmsShowCtrl(Film, $stateParams) {
  const vm = this;

  vm.film = Film.get({ id: $stateParams.id });
}
