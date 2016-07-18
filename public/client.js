//create angular app
angular.module('angularCodeChallenge', []);
//create controller
angular.module('angularCodeChallenge').controller('MainController', MainController);
//controller function
function MainController($http) {
  //set view model to vm
  var vm = this;

  //set default button text to 'Display'
  vm.toggle = 'Display';
  //assign getNames function to vm object
  vm.getNames = getNames;
  //initially hide students list
  vm.show = false;

  function getNames() {
    //check if request has been done before, if so, skip request.
    if (typeof vm.students != 'object') {
    $http.get('/students').then(handleSuccess, handleFailure);
    }
    //change button to display 'Hide' if students are shown
    if (vm.show === false) {
      vm.show = true;
      vm.toggle = 'Hide'
    }
    //change button to display 'Display' if students are hidden
    else {
      vm.show = false;
      vm.toggle = 'Display'
    }
  }

  //set vm.students as students array
  function handleSuccess(request, response) {
    vm.students = request.data;
    console.log('Students received!');
  }
  function handleFailure() {
    console.log('Faillluuurreee');
  }

};
