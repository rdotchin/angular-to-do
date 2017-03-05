angular
	.module('toDoList.component.tabs')
	.directive('tabs', Tabs);

function Tabs(){
	return {
		restrict: 'E', //Directive will be an element <tabs></tabs>
		scope: {
			tabsData: '=',
		},
		templateUrl: '/toDoList/features/components/tabs/tabs.html',
		controller: TabsCtrl, // The function to use as the controller for the directive
		controllerAs: 'TabsVM', //The namespace for the view to access the view model
		bindToController: true // The scope is isolated because we are using controllerAs
	};
}

function TabsCtrl() {
	var vm = this;
}