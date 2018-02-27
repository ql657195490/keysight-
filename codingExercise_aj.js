var app = angular.module('myApp', ['ngDragDrop']);

var temp = "";
var temp1 = "";
var num = 1;
var expressionArea = false;

app.controller('ctrl1', function($scope, $q){
			
  $scope.list1 = {title: 'add'};
  $scope.list0 = {title: ''};
  $scope.list2 = {title: 'substract'};
  $scope.list3 = {title: 'foo'};
  $scope.list4 = {title: 'complicate'};
  $scope.icon_status = 'noIcon';

  $scope.p1 = false;
  $scope.p2 = false;
  $scope.p3 = false;
  $scope.ini = false;


  $scope.dragIconAdd = function(){
    temp = 'addIcon';
    temp1 = 'add';
    //$scope.list
    num = 2;
  }

  $scope.dragIconSub = function(){
    temp = 'subIcon';
    temp1 = 'substract';
    //$scope.list2.title = temp1;
    num = 2;
  }

  $scope.dragIconFoo = function(){
    temp = 'fooIcon';
    temp1 = 'foo';
    //$scope.list3.title = temp1;
    num = 3;
  }

  $scope.dragIconCom = function(){
    temp = 'comIcon';
    temp1 = 'complicate';
    //$scope.list4.title = temp1;
    num = 1;
  }

  $scope.dropIcon = function(){
    if(expressionArea == true){
      $scope.ini = true;
      $scope.icon_status = temp;
      $scope.list0.title = temp1;


      if(temp1 == 'add'){
        $scope.list1.title = temp1;
      }else if(temp1 == 'substract'){
        $scope.list2.title = temp1;
      }else if(temp1 == 'foo'){
        $scope.list3.title = temp1;
      }else{
        $scope.list4.title = temp1;
      }
      expressionArea = false;
      temp = "";
      temp1 = "";
      if(num == 2){
        $scope.p1 = true;
        $scope.p2 = true;
        $scope.p3 = false;
      }else if(num == 3){
        $scope.p1 = true;
        $scope.p2 = true;
        $scope.p3 = true;
      }else{
        $scope.p1 = true;
        $scope.p2 = false;
        $scope.p3 = false;
      }
    }
  }


  $scope.beforeDrop=function(){
    var deffered=$q.defer();
    return deffered.promise;
  }
});
function dropComplete(event){
  event.preventDefault();
  expressionArea = true;
}

function allowDrop(event) {
    event.preventDefault();
}

function add(x, y){

}

function substract(x, y){

}

function foo(x, y, z){

}

function complicate(x){

}