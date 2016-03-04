/* global require */
import { RatingsController } from './ratings.controller';
import template from './template.html';

export function AngularRatingsDirective() {

    const directive = {
        restrict: 'E',
        replace: true,
        scope: {},
        bindToController: {
            ratingValue: '=',
            ratings: '=?',
            readOnly: '=?',
        },
        templateUrl: template,
        link: linkFunction,
        controller: RatingsController,
        controllerAs: 'vm',
    };

    return directive;


    /*
     * Link
     */
    function linkFunction($scope, $element, $attrs, $ctrl) {
        'ngInject';

        console.log('in link');

        if ($ctrl.readOnly) {
            $element.addClass('stars--disabled');
        }

    }


}

