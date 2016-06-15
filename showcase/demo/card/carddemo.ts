import {Component} from '@angular/core';
import {Card} from '../../../components/card/card';


@Component({
    templateUrl: 'showcase/demo/card/carddemo.html',
    directives: [Card]
})

export class CardDemo {
    
    constructor(){
        console.log("called component")
    }
}