
import {Component,ElementRef,AfterContentInit,Input,Output,EventEmitter} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
    selector: 'a-button',
    template: `
        <div [ngStyle]="style" [ngClass]='styleClass'>
            <ng-content></ng-content>
        </div>
    `,
    directives: [NgClass]
})
export class Lbutton {
    
    
    @Input() style: any;
    
    @Input() styleClass: string;
    
    
}