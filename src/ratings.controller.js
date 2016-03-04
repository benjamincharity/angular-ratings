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
        // Expose some items to the dom
        this.starTemplate = this.AngularRatingsConfig.starTemplate;
        this.selectedClass = this.bcSelectedClass || this.AngularRatingsConfig.selectedClass;
        this.unselectedClass = this.bcUnselectedClass || this.AngularRatingsConfig.unselectedClass;
        this.ratings = this.bcRatings || this.AngularRatingsConfig.ratings;

        // Watch for rating changes
        this.$scope.$watch('vm.bcRatingValue', (newValue) => {
            if (newValue) {
                this.updateStars(newValue);
            }
        });

        // Initialize stars with the passed in rating
        this.updateStars(this.bcRatingValue);

    }


    /**
     * Update rating stars
     */
    updateStars(currentRating) {

        // Loop through the ratings
        this.ratings.forEach((rating) => {

            // If this rating is equal or less than the current rating, marked it checked
            if (rating.rating && rating.rating <= parseInt(currentRating, 10)) {
                rating.checked = true;
            } else {
                rating.checked = false;
            }
        });

    }

}

