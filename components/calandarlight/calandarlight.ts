import {Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChange, ElementRef,AfterViewInit} from '@angular/core';
import {NgIf, NgFor, NgClass, NgStyle, NgModel} from '@angular/common';


@Component({
    selector: 'bootflat-date-picker',
    templateUrl: 'components/calandarlight/calandarlight.html',
    styleUrls: ['components/calandarlight/calandarlight.css'],
    directives: [NgIf, NgFor, NgClass, NgStyle]
})


export class BootFlatDatePicker  implements AfterViewInit {
    constructor() { }
    
    
 ngAfterViewInit(){
     
 }
    }


