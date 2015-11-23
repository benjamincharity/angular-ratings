function StarRatingDirective(
) {
    'ngInject';

    const directive = {
        restrict: 'E',
        replace: true,
        scope: {},
        bindToController: {
            ratingValue: '=',
            ratings: '=?',
            readOnly: '=?',
        },
        templateUrl: 'app/components/star-rating/stars.html',
        link: linkFunction,
        controller: StarRatingController,
        controllerAs: 'vm',
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
function StarRatingController(
    $scope
) {

    const self = this;

    // If no ratings were passed in, build a default array
    if (!self.ratings) {
        self.ratings = [
            {
                rating: 1,
            },
            {
                rating: 2,
            },
            {
                rating: 3,
            },
            {
                rating: 4,
            },
            {
                rating: 5,
            },
        ];
    }


    // Initialize stars with the passed in rating
    updateStars(self.ratingValue);

    // Watch for rating changes
    $scope.$watch('vm.ratingValue', function(newValue) {
        if (newValue) {
            updateStars(newValue);
        }
    });




    /**
     * Update rating stars
     */
    function updateStars(currentRating) {

        _.forEach(self.ratings, function(rating) {
            if (rating.rating && rating.rating <= parseInt(currentRating, 10)) {
                rating.checked = true;
            } else {
                rating.checked = false;
            }
        });

    }


}


export default StarRatingDirective;

