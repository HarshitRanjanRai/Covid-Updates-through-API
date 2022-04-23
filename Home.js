const URL=" https://covid19.mathdro.id/api";

let app = angular.module("myapp",[]);

app.controller("myctrl",($scope,$http)=>{
$scope.title="Stay Home Stay Safe";

$http.get(URL).then((response)=>{

$scope.all_data=response.data;

},(error)=>{});
});
