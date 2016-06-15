
import { Directive, Input, Component, ElementRef, AfterViewInit } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
import {NgClass} from '@angular/common';
@Component({
    selector: 'pnavbar',
    template: `<div [ngStyle]="pstyle" [ngClass]="{'navbar': true}">
    
       <div [ngClass]="{'navbar-header': true}">
        <ng-content select="pnavbar-header"></ng-content>
       </div>
       
       <div [ngClass]="{'nav': true}">
        <ng-content select="pnavbar-ul"></ng-content>
       </div>
       
         <ng-content select="pnavbar-content"></ng-content>
       
    </div>`,
    
    
    providers: [DomHandler],
    directives: [NgClass]
})

export class Navbar {
    @Input() pstyle: any;
    constructor(private el: ElementRef, private domHandler: DomHandler) {
        console.log("Navbar")
    }
}







