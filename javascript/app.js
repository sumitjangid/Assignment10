var app = angular.module("commentSys",[]);

app.controller("com_control",function($scope){

    $scope.Listcomment=[
    "This is the first comment",
    "Here's the second comment",
    "And this is one More",
    "Here is another one"]; 

    $scope.com_insert = function(){
    	if($scope.com_input== null){
    		window.alert("No comment found");
    	}else{
    	    $scope.Listcomment.push($scope.com_input);
        	$scope.com_input = "";
    	}
    }
});


