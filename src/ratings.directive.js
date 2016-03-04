/* global require */
import { RatingsController } from './ratings.controller';
import template from './template.html';

export function AngularRatingsDirective() {

    const directive = {
        restrict: 'E',
        replace: true,
        scope: {},
        bindToController: {
            bcRatingValue: '=',
            bcRatings: '=?',
            bcReadOnly: '=?',
        },
        templateUrl: template,
        controller: RatingsController,
        controllerAs: 'vm',
    };

    return directive;


}

