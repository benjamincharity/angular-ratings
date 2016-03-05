import star from './template.star.html';

export class RatingsConfigProvider {

    constructor() {
        // Define defaults
        this.readOnly = true;

        // This should be an HTML template string
        this.starTemplate = star;

        this.selectedClass = 'ion-ios-star';
        this.unselectedClass = 'ion-ios-star-outline';

        // Define the type of value that the directive should expose
        // Possible values:
        //   'integer' => 7
        //   'decimal' => 7.3
        //   'percent' => 73
        this.valueType = 'integer';

        // This should be an array of objects. We need the object so that we can add/remove the
        // 'checked' flag
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




    $get() {
        return this;
    }


}

