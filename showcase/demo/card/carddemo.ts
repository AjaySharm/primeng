import {Component} from '@angular/core';
import {Card, ViewCard,OrderCard} from '../../../components/card/card';


@Component({
    templateUrl: 'showcase/demo/card/carddemo.html',
    directives: [Card]
})



export class CardDemo {    
    constructor(){
        console.log("called component")
    }
}

@Component({
    templateUrl: 'showcase/demo/card/viewcarddemo.html',
    directives: [ViewCard,OrderCard]
})
export class ViewCardDemo {
    
    constructor(){
        console.log("called component viewcarddemo")
    }
    OnActives(obj){
       console.log("active");
        //alert("saddsfasdfa");
    }   
    OnActives2(){
       console.log("active");
        alert("saddsfasdfa");
    }
}