
import {Component,ElementRef,AfterContentInit,Input,Output,EventEmitter} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
    selector: 'a-button',
    template: `
        <div [ngStyle]="style" [ngClass]='styleClass'>
            <ng-content></ng-content>
        </div>
    `,
    // styles: [`.success{
    //     color:red
    // }
    // .warning{
    //     color:blue
    // }`],
    
    directives: [NgClass]
})
export class Space {
    
    
    @Input() style: any;
    
    @Input() styleClass: string;
    
    
}