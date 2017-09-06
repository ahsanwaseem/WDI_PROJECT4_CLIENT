angular
  .module('filmApp')
  .controller('FilmsIndexCtrl', FilmsIndexCtrl);

FilmsIndexCtrl.$inject = ['Film'];
function FilmsIndexCtrl(Film) {
  const vm = this;

  vm.films = Film.query();
}
