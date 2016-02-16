/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _angularRatingsDirective = __webpack_require__(1);

	angular.module('angular-ratings', []).directive('bpcAngularRatings', _angularRatingsDirective.AngularRatingsDirective);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AngularRatingsDirective = AngularRatingsDirective;
	/* global require */

	var templateUrl = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./stars.html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	function AngularRatingsDirective() {
	    'ngInject';

	    var directive = {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        bindToController: {
	            ratingValue: '=',
	            ratings: '=?',
	            readOnly: '=?'
	        },
	        templateUrl: templateUrl,
	        link: linkFunction,
	        controller: StarRatingController,
	        controllerAs: 'vm'
	    };

	    return directive;

	    /*
	     * Link
	     */
	    function linkFunction($scope, $element) {

	        if ($scope.readOnly) {
	            $element.addClass('stars--disabled');
	        }
	    }

	    /**
	     * Controller
	     */
	    function StarRatingController($scope) {
	        var _this = this;

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
	                updateStars.call(_this, newValue);
	            }
	        });

	        /**
	         * Update rating stars
	         */
	        function updateStars(currentRating) {

	            this.ratings.forEach(function (rating) {
	                if (rating.rating && rating.rating <= parseInt(currentRating, 10)) {
	                    rating.checked = true;
	                } else {
	                    rating.checked = false;
	                }
	            });
	        }
	    }
	}

/***/ }
/******/ ]);