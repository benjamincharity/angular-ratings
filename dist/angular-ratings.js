(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("angular-ratings", [], factory);
	else if(typeof exports === 'object')
		exports["angular-ratings"] = factory();
	else
		root["angular-ratings"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angularRatingsDirective = __webpack_require__(1);
	
	angular.module('bc.AngularRatings', []).directive('bcAngularRatings', _angularRatingsDirective.AngularRatingsDirective);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AngularRatingsDirective = AngularRatingsDirective;
	
	var _template = __webpack_require__(2);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function AngularRatingsDirective() {
	
	    linkFunction.$inject = ["$scope", "$element"];
	    StarRatingController.$inject = ["$scope"];
	    var directive = {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        bindToController: {
	            ratingValue: '=',
	            ratings: '=?',
	            readOnly: '=?'
	        },
	        templateUrl: _template2.default,
	        link: linkFunction,
	        controller: StarRatingController,
	        controllerAs: 'vm'
	    };
	
	    return directive;
	
	    /*
	     * Link
	     */
	    function linkFunction($scope, $element) {
	        'ngInject';
	
	        if ($scope.readOnly) {
	            $element.addClass('stars--disabled');
	        }
	    }
	
	    /**
	     * Controller
	     */
	    function StarRatingController($scope) {
	        'ngInject';
	
	        var self = this;
	
	        // If no ratings were passed in, build a default array
	        if (!this.ratings) {
	            this.ratings = [{
	                rating: 1
	            }, {
	                rating: 2
	            }, {
	                rating: 3
	            }, {
	                rating: 4
	            }, {
	                rating: 5
	            }];
	        }
	
	        // Initialize stars with the passed in rating
	        updateStars(this.ratingValue);
	
	        // Watch for rating changes
	        $scope.$watch('vm.ratingValue', function (newValue) {
	            if (newValue) {
	
	                // NOTE: I was using `updateStars.call(this, newValue)` in order to continue using
	                // `this` without an alias. When Webpack/Babel converts to ES5 it seems to miss the
	                // reference to this inside `updateStars` - `this.ratings.forEach...` so an error
	                // `Cannot read property 'ratings' of undefined` was being thrown.
	                updateStars(newValue);
	            }
	        });
	
	        /**
	         * Update rating stars
	         */
	        function updateStars(currentRating) {
	
	            self.ratings.forEach(function (rating) {
	                if (rating.rating && rating.rating <= parseInt(currentRating, 10)) {
	                    rating.checked = true;
	                } else {
	                    rating.checked = false;
	                }
	            });
	        }
	    }
	} /* global require */

/***/ },
/* 2 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-ratings/src/template.html';
	var html = "<div class=bpc-stars data-ng-class=\"{ 'stars--disabled': vm.readOnly }\"> <div class=bpc-stars__star data-ng-repeat=\"rating in vm.ratings track by $index\" data-ng-click=\"vm.ratingValue = rating.rating\"> <span class=bpc-stars__star-icon data-ng-class=\"rating.checked ? 'ion-ios-star' : 'ion-ios-star-outline'\"></span> </div> </div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular-ratings.js.map