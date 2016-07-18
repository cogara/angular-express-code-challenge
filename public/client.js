angular.module('angularCodeChallenge', []);

angular.module('angularCodeChallenge').controller('MainController', MainController);

function MainController($http) {
  var vm = this;

  vm.test = 'Testing Angular';
  vm.toggle = 'Display';
  vm.getNames = getNames;
  vm.show = false;

  function getNames() {
    if (typeof vm.students != 'object') {
    $http.get('/students').then(handleSuccess, handleFailure);
    }
    if (vm.show === false) {
      vm.show = true;
      vm.toggle = 'Hide'
    }
    else {
      vm.show = false;
      vm.toggle = 'Display'
    }
  }

  function handleSuccess(request, response) {
    vm.students = request.data;
    console.log('Students received!');
  }
  function handleFailure() {
    console.log('Faillluuurreee');
  }

};
