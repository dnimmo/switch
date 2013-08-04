function NavController ($scope) {

    $scope.nav = function(goTo){
        scrollTo(goTo);
    };
}

function ServicesController ($scope) {
    $scope.levelOne = true;
    $scope.levelTwo = false;
    $scope.levelThree = false;

    $scope.level = function(level){
        scrollTo('levelsContainer');
        if (level === 'levelOne'){
            $scope.levelOne = true;
            $scope.levelTwo = false;
            $scope.levelThree = false;
        } else if (level === 'levelTwo'){
            $scope.levelOne = false;
            $scope.levelTwo = true;
            $scope.levelThree = false;
        } else {
            $scope.levelOne = false;
            $scope.levelTwo = false;
            $scope.levelThree = true;      
        }
    };
}

var scrollTo = function(scroll){
    document.getElementById(scroll).scrollIntoView()
};