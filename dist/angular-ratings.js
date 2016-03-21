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
	
	var _ratings = __webpack_require__(1);
	
	var _ratingsDirective = __webpack_require__(3);
	
	angular.module('bc.AngularRatings', []).provider('AngularRatingsConfig', _ratings.RatingsConfigProvider).directive('bcAngularRatings', _ratingsDirective.AngularRatingsDirective);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RatingsConfigProvider = undefined;
	
	var _templateStar = __webpack_require__(2);
	
	var _templateStar2 = _interopRequireDefault(_templateStar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var RatingsConfigProvider = exports.RatingsConfigProvider = function () {
	    function RatingsConfigProvider() {
	        _classCallCheck(this, RatingsConfigProvider);
	
	        // Define defaults
	        this.readOnly = true;
	
	        // This should be an HTML template string
	        this.starTemplate = _templateStar2.default;
	
	        this.selectedClass = 'ion-ios-star';
	        this.unselectedClass = 'ion-ios-star-outline';
	
	        // This should be an array of objects. We need the object so that we can add/remove the
	        // 'checked' flag
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
	
	    _createClass(RatingsConfigProvider, [{
	        key: '$get',
	        value: function $get() {
	            return this;
	        }
	    }]);
	
	    return RatingsConfigProvider;
	}();

/***/ },
/* 2 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-ratings/src/template.star.html';
	var html = "<span class=bpc-stars__star-icon data-ng-class=\"rating.checked ? vm.selectedClass : vm.unselectedClass\"></span>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AngularRatingsDirective = AngularRatingsDirective;
	
	var _ratings = __webpack_require__(4);
	
	var _template = __webpack_require__(5);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* global require */
	function AngularRatingsDirective() {
	
	    var directive = {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        bindToController: {
	            bcRatingValue: '=',
	            bcRatings: '=?',
	            bcReadOnly: '=?'
	        },
	        templateUrl: _template2.default,
	        controller: _ratings.RatingsController,
	        controllerAs: 'vm'
	    };
	
	    return directive;
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var RatingsController = exports.RatingsController = function () {
	    RatingsController.$inject = ["$scope", "AngularRatingsConfig"];
	    function RatingsController($scope, AngularRatingsConfig) {
	        'ngInject';
	
	        _classCallCheck(this, RatingsController);
	
	        this.$scope = $scope;
	        this.AngularRatingsConfig = AngularRatingsConfig;
	
	        this._activate();
	    }
	
	    _createClass(RatingsController, [{
	        key: '_activate',
	        value: function _activate() {
	            var _this = this;
	
	            // Expose some items to the dom
	            this.starTemplate = this.AngularRatingsConfig.starTemplate;
	            this.selectedClass = this.bcSelectedClass || this.AngularRatingsConfig.selectedClass;
	            this.unselectedClass = this.bcUnselectedClass || this.AngularRatingsConfig.unselectedClass;
	            this.ratings = this.bcRatings || this.AngularRatingsConfig.ratings;
	
	            // Watch for rating changes
	            this.$scope.$watch('vm.bcRatingValue', function (newValue) {
	                if (newValue) {
	                    _this.updateStars(newValue);
	                }
	            });
	
	            // Initialize stars with the passed in rating
	            this.updateStars(this.bcRatingValue);
	        }
	
	        /**
	         * Update rating stars
	         */
	
	    }, {
	        key: 'updateStars',
	        value: function updateStars(currentRating) {
	
	            // Loop through the ratings
	            this.ratings.forEach(function (rating) {
	
	                // If this rating is equal or less than the current rating, marked it checked
	                if (rating.rating && rating.rating <= parseInt(currentRating, 10)) {
	                    rating.checked = true;
	                } else {
	                    rating.checked = false;
	                }
	            });
	        }
	    }]);
	
	    return RatingsController;
	}();

/***/ },
/* 5 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-ratings/src/template.html';
	var html = "<div class=bpc-stars data-ng-class=\"{ 'bpc-stars--disabled': vm.bcReadOnly }\"> <div class=bpc-stars__star data-ng-repeat=\"rating in ::vm.ratings track by $index\" data-ng-click=\"vm.bcRatingValue = rating.rating\"> <ng-include src=vm.starTemplate></ng-include> </div> </div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular-ratings.js.map