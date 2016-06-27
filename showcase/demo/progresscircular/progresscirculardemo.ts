import {Component} from '@angular/core';
import {ProgressCircular} from '../../../components/ProgressCircular/ProgressCircular';
import {CodeHighlighter} from '../../../components/codehighlighter/codehighlighter';
import {ROUTER_DIRECTIVES} from '@angular/router';


@Component({
    templateUrl: 'showcase/demo/progresscircular/progresscirculardemo.html',
    directives: [ProgressCircular,CodeHighlighter,ROUTER_DIRECTIVES]
})
export class ProgressCircularComponent {

    
}