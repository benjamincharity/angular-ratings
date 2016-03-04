export class RatingsController {

    constructor(
        $scope
    ) {
        'ngInject';

        this.$scope = $scope;


        this._activate();

    }




    _activate() {
        const self = this;

        console.log('in activate');

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
        this.$scope.$watch('vm.ratingValue', (newValue) => {
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

            self.ratings.forEach((rating) => {
                if (rating.rating && rating.rating <= parseInt(currentRating, 10)) {
                    rating.checked = true;
                } else {
                    rating.checked = false;
                }
            });

        }


    }

}

