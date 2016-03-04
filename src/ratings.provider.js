import stars from './template.star.html';

export class RatingsConfigProvider {

    constructor() {
        // Define defaults
        this.readOnly = true;
        this.starTemplate = stars;
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

