import stars from './template.star.html';

export class RatingsConfigProvider {

    constructor() {
        // Define defaults
        this.readOnly = true;
        this.starTemplate = stars;
    }




    $get() {
        return this;
    }


}

