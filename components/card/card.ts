import { Directive, Input, Component, ElementRef, AfterViewInit } from '@angular/core';
import { DomHandler } from '../dom/domhandler';

@Component({
    selector: 'pCard',
    template: `<div [ngStyle]="pstyle" [ngClass]="{'ui-card': true}">
       <div [ngClass]="{'ui-card-title-text': true}">
        <ng-content select="pCard-title-text"></ng-content>
       </div>
       <div [ngClass]="{'ui-card-content': true}">
        <ng-content select="pCard-content" style="color:red"></ng-content>
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