export class RatingsController {

    constructor(
        $scope,
        AngularRatingsConfig
    ) {
        'ngInject';

        this.$scope = $scope;
        this.AngularRatingsConfig = AngularRatingsConfig;


        this._activate();
    }




    _activate() {
        this.starTemplate = this.AngularRatingsConfig.starTemplate;

        // If no ratings were passed in, build a default array
        if (!this.bcRatings) {
            this.bcRatings = this.AngularRatingsConfig.ratings;
        }

        // Initialize stars with the passed in rating
        this.updateStars(this.bcRatingValue);

        // Watch for rating changes
        this.$scope.$watch('vm.bcRatingValue', (newValue) => {
            if (newValue) {
                this.updateStars(newValue);
            }
        });

    }


    /**
     * Update rating stars
     */
    updateStars(currentRating) {

        // Loop through the ratings
        this.bcRatings.forEach((rating) => {

            // If this rating is equal or less than the current rating, marked it checked
            if (rating.rating && rating.rating <= parseInt(currentRating, 10)) {
                rating.checked = true;
            } else {
                rating.checked = false;
            }
        });

    }

}

