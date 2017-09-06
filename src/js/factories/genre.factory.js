angular
  .module('filmApp')
  .factory('Genre', genreFactory);

genreFactory.$inject = ['API', '$resource'];
function genreFactory(API, $resource){
  return $resource(`${API}/genres/:id`, { id: '@_id'});
}
