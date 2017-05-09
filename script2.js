var app = angular.module('redditSwap', ['ngRoute']);

app.controller('redditCtrl', function($scope, $http) {
    
$scope.posts = [];
    
    
    $http({
        method: 'GET',
        url: 'http://www.reddit.com/r/OCPoetry.json'
        //url:'http://www.reddit.com/r/' + $scope.userReddit + '.json',
    }).then(function callBack(response) {
        $scope.posts = response.data.data.children;
        console.log(response);
    }, function(error) {
        console.log(response);
        console.log(callBack);
    });  
$scope.getImage = function(src) {
        if(src==="" || src==="default" || src==="self") {
            return "img/bookimage.jpg";
        }else{
            return src;
        }
}           
});




app.directive('redditPost', function() {
    
    return {
        restrict: 'C',
        template: '<p>...</p>', //put in post data
        replace: true
        //then add class to all p elements
        //ng-repeat
    }
})
