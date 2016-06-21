
import { Directive, Input, Component, ElementRef, AfterViewInit } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
import {NgClass} from '@angular/common';
@Component({
    selector: 'pmodal',
    template: `<div [ngStyle]="pstyle" [ngClass]="{'modal-content': true}">
    
                  <ng-content select="pmodel-content"></ng-content>
       
               </div>`,
    
    
    providers: [DomHandler],
    directives: [NgClass]
})

export class Modal {
    @Input() pstyle: any;
    constructor(private el: ElementRef, private domHandler: DomHandler) {
        console.log("Navbar")
    }
}







