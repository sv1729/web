

app.controller("AboutMeController", function($scope,$http) {
	$http.get("data/content.json")
	.then(function(response){
		$scope.content=response.data
	});
	$scope.title0 = "History Audit Report"
	$scope.title = "Patient information"
	$scope.title1 = "Client information"
	$scope.title2 = "Vitals"
	$scope.title3 = "Allergies as of 3/12/2019"
    $scope.title4 = "Progress Notes"

});
