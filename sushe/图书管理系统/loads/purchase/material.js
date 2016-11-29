var app = angular.module("app.material",["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider.when("/material",{
        templateUrl:"loads/purchase/material.html",
        controller:"materialController"
    });
});
app.controller("materialController",function($scope,$http,modalService){
    $scope.msg = "这是书本库存页面";
	
	$scope.foo={
		upUsed:0
	};
	$scope.foodsData={
		foods:$scope.$parent.foodData.foods,
		criteria:{},
		modal:{},
		
		newFoods:{},
		//打开模态框
		showUpd:function(id){
			var oo=this.foods.filter(function(item){
				return item.id==id;
			})[0];
			this.newFoods=oo;
			$scope.foo.upUsed=0;//每次打开修改时，默认增长使用量为0
			modalService.open("foodsModal");
		},
		//更改书本使用情况
		changeUsed:function(id){
			var oo=this.foods.filter(function(item){
				return item.id==id;
			})[0];
			var date=new Date().toLocaleDateString();
			var dates=date.split("/");
			var time=dates[0]+"年"+dates[1]+"月"+dates[2]+"日";
			
			if(+$scope.foo.upUsed<=oo.sheng){
				oo.used += +$scope.foo.upUsed;
				oo.sheng=oo.much-oo.used;
				oo.changeTime=time;//更新当前修改时间
				modalService.close("foodsModal");
				}else{
					alert("书本消耗不能大于剩余量");
					}
			
		},
		//查找书本
		searchFoods:function(){
			this.criteria={};
			if(this.modal.name && this.modal.val){
				this.criteria[this.modal.name]=this.modal.val;
			}else{
				this.criteria={};
			}
		}


	};

	
});