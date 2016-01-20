/* global require */
export function AngularRatingsDirective(
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
        templateUrl: require('./stars.html'),
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




    /**
     * Controller
     */
    function StarRatingController(
        $scope
    ) {

        // If no ratings were passed in, build a default array
        if (!this.ratings) {
            this.ratings = [
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
        updateStars(this.ratingValue);

        // Watch for rating changes
        $scope.$watch('vm.ratingValue', (newValue) => {
            if (newValue) {
                updateStars.call(this, newValue);
            }
        });




        /**
         * Update rating stars
         */
        function updateStars(currentRating) {

            this.ratings.forEach((rating) => {
                if (rating.rating && rating.rating <= parseInt(currentRating, 10)) {
                    rating.checked = true;
                } else {
                    rating.checked = false;
                }
            });

        }


    }

}

