angular
  .module('filmApp')
  .factory('Film', filmFactory);

filmFactory.$inject = ['API', '$resource'];
function filmFactory(API, $resource){
  return $resource(`${API}/films/:id`, { id: '@_id'});
}
