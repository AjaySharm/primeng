
import { Directive, Input, Component, ElementRef, AfterViewInit } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
import {NgClass} from '@angular/common';
@Component({
    selector: 'Snavbar',
    template: `<div [ngStyle]="pstyle" [ngClass]="{'snavbar': true}">
    
                <div [ngClass]="{'snavbar-header': true}">
                    <ng-content select="snavbar-header"></ng-content>
                </div>
    
                <ng-content select="Snavbar-content"></ng-content>
    
            </div>`,


    providers: [DomHandler],
    directives: [NgClass]
})

export class Sidenavbar {
    @Input() pstyle: any;
    constructor(private el: ElementRef, private domHandler: DomHandler) {
        console.log("Navbar")
    }
}