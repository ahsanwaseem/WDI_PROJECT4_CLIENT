angular
  .module('filmApp')
  .controller('FilmsNewCtrl', FilmsNewCtrl);

FilmsNewCtrl.$inject = ['Film', 'Genre', '$state'];
function FilmsNewCtrl(Film, Genre, $state) {
  const vm = this;

  vm.addFilm      = addFilm;
  vm.selectGenre  = selectGenre;
  vm.genres       = Genre.query();
  vm.film         = {genre_ids:[]}

  function addFilm() {
    Film
      .save({ film: vm.film })
      .$promise
      .then(() => $state.go('filmsIndex'));
  }
  function selectGenre(id) {
    if (vm.film.genre_ids.indexOf(id) !== -1) {
      const index = vm.film.genre_ids.indexOf(id);
      vm.film.genre_ids.splice(index, 1);
    } else {
      vm.film.genre_ids.push(id);
    }
  }
}
