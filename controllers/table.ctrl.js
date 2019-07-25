module.controller("tableCtrl", TableController);

function TableController($scope, tableManagerService) {
    $scope.tableManagerService = tableManagerService;
    tableManagerService.init();
    this.getClass = (cail) => {
        return cail.open? 'cail card open': 'cail card';
    }
}