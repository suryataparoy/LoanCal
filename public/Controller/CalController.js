var CalApp = angular.module('CalApp', []);
CalApp.controller('CalCtrl',['$scope','$http',function ($scope,$http){
	var month=0;
	var int_charged=0;
	$scope.int_charged=int_charged;
	var prin= 0;
	$scope.prin=prin;
	var year=0;
	var date="";
	var arr= new Array();
	$scope.arr= arr;
	var calculated=false;
	console.log("im outside");
	$scope.Calculate = function(){
			var cur_loan_amt1 = $scope.cur_loan_amt
			console.log("im inside"+ cur_loan_amt1);

		while(cur_loan_amt1>0 && cur_loan_amt1>200 ){
			$scope.int_charged= cur_loan_amt1* (($scope.int_rate/100)/12);
			$scope.int_charged=Number($scope.int_charged.toFixed(2));
			console.log($scope.int_charged);

			$scope.prin= $scope.monthly_pay - $scope.int_charged;
			$scope.prin= Number($scope.prin.toFixed(2));
			console.log($scope.prin);

			cur_loan_amt1= cur_loan_amt1 - $scope.prin;
			cur_loan_amt1= Number(cur_loan_amt1.toFixed(2));

			if(cur_loan_amt1<=-1){break;}

			month= month+1;
			console.log(month);

			year= Math.floor(month/12);
			yearstr= year.toString();
			var m= month%12;
			var month1= m.toString();
			date = (yearstr+ " Year " + month1 +" Month")
			console.log(date);

			arr.push([date, cur_loan_amt1, $scope.int_charged]);	
			$scope.calculated= calculated;
		$scope.calculated=true;		

		}
		$scope.arr= arr;
		console.log($scope.arr);
	}					


	$scope.Reset=function(){
		$scope.cur_loan_amt="";
		$scope.monthly_pay= "";
		$scope.int_rate= "";

		month=0;
		year=0;
		date="";
		$scope.int_charged=0;
		$scope.prin=0;
		$scope.calculated=false;
		$scope.arr.length=0;
	}

	}]);
