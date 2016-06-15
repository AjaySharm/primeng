import { Directive, Input, Component, ElementRef, AfterViewInit } from '@angular/core';
import { DomHandler } from '../dom/domhandler';

@Component({
    selector: 'pCard',
    template: `<div [ngStyle]="pstyle" [ngClass]="{'ui-card': true}" class="ui-grid ui-grid-responsive ui-grid-pad">
       <div [ngClass]= "{'ui-card-title': true}" class="ui-grid-col-9 ui-grid" >
            <div [ngClass] = "{'ui-card-media' : true}"  class="ui-grid-col-6 ui-grid">
                <div  [ngClass] = "{'ui-card-media-img' : true}" class="ui-grid-col-6">
                    <ng-content select="pCard-media-img"></ng-content>
                </div>
                <div [ngClass] = "{'ui-card-media-details' : true}" class="ui-grid-col-6">
                    <ng-content select="pCard-media-details"></ng-content>
                </div>  
            </div>
            <div [ngClass] = "{'ui-card-title' : true}" class="ui-grid-col-6">
                <div [ngClass]="{'ui-card-title-text': true}">
                    <ng-content select="pCard-title-text"></ng-content>
                </div>
                <div [ngClass]="{'ui-card-title-content': true}">
                    <ng-content select="pCard-title-content"></ng-content>
                </div>
            </div>
       </div>
       
       <div [ngClass] = "{'ui-card-action' : true}" class="ui-grid-col-3">
            <ng-content select="pCard-action"></ng-content>
       </div>
    </div>`,
    providers: [DomHandler]
})

export class Card {
    @Input() pstyle: any;
    constructor(private el: ElementRef, private domHandler: DomHandler) {
        console.log("Cards")
    }
}