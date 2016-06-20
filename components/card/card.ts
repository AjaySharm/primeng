import { Directive, Input, Output, Component, ElementRef, AfterViewInit, EventEmitter } from '@angular/core';
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



@Component({
    selector: 'pViewCard',
    template: `<div [ngStyle]="pstyle" [ngClass]="{'ui-view-card': true}" class="ui-grid ui-grid-responsive ui-grid-pad">
       <div [ngClass]= "{'ui-view-card-title': true}" class="ui-grid-col-12" >
            <div [ngClass] = "{'ui-card-media' : true}"  class="ui-grid-col-2 " >
                <div [ngClass] = "{'ui-card-media-img' : !isActive, active: isActive}" (click)="toggleActive()">
                    <ng-content select="pCard-media-img"></ng-content>
                </div>
            </div>
            <div [ngClass] = "{'ui-card-title' : true}" class="ui-grid-col-10">
                <div [ngClass]="{'ui-card-title-text': true}">
                    <ng-content select="pCard-title-text"></ng-content>
                </div>
                <div [ngClass]="{'ui-card-title-content': true}">
                    <ng-content select="pCard-title-content"></ng-content>
                </div>
            </div>
       </div>
    </div>`,
    providers: [DomHandler]
})

export class ViewCard {
    @Input() pstyle: any;
    @Output() actives = new EventEmitter();
    isActive = false;
    // constructor(private el: ElementRef, private domHandler: DomHandler) {
    constructor(){
        console.log("Cards")
    }
    toggleActive(){
        
        this.isActive = !this.isActive;
        this.actives.emit('something');
    }
}


@Component({
    selector: 'pOrderCard',
    template: `<div [ngStyle]="pstyle" [ngClass]="{'ui-view-card': true}" class="ui-grid ui-grid-responsive ui-grid-pad">
       <div [ngClass]= "{'ui-view-card-title': true}" class="ui-grid-col-12" >
            <div [ngClass] = "{'ui-card-title' : true}">
                <div [ngClass]="{'ui-card-title-text': true}">
                    <ng-content select="pCard-title-text"></ng-content>
                </div>
                <div [ngClass]="{'ui-card-title-content': true}">
                    <ng-content select="pCard-title-content"></ng-content>
                </div>
            </div>
       </div>
    </div>`,
    providers: [DomHandler]
})

export class OrderCard {
    @Input() pstyle: any;
    constructor(private el: ElementRef, private domHandler: DomHandler) {
        console.log("Cards")
    }
    
}