import { RatingsConfigProvider } from './ratings.provider'
import { AngularRatingsDirective } from './ratings.directive.js';

angular.module('bc.AngularRatings', [])
    .provider('AngularRatingsConfig', RatingsConfigProvider)
    .directive('bcAngularRatings', AngularRatingsDirective)
;

