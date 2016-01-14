'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _angularRatings = require('./angularRatings.directive');

exports.default = angular.module('bcharity.angular-ratings', []).directive('bpcAngularRatings', _angularRatings.AngularRatingsDirective);
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StarRatingDirective = StarRatingDirective;
function StarRatingDirective() {
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
        templateUrl: 'app/components/star-rating/stars.html',
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
angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("stars.html","<div class=bpc-stars data-ng-class=\"{ \'stars--disabled\': vm.readOnly }\"><div class=bpc-stars__star data-ng-repeat=\"rating in vm.ratings track by $index\" data-ng-click=\"vm.ratingValue = rating.rating\"><span class=bpc-stars__star-icon data-ng-class=\"rating.checked ? \'ion-ios-star\' : \'ion-ios-star-outline\'\"></span></div></div>");}]);