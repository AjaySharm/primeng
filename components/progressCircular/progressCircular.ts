
import {Component,ElementRef,AfterViewInit,OnDestroy,OnChanges,Input,Output,SimpleChange} from '@angular/core';
import {Message} from '../common';

@Component({
    moduleId : module.id,
    selector: 'p-progress-circular',
    template: `
        <div class="cell">
            <div class="loader square switch">
                <div class="block">
                    <div class="box"></div>
                </div>
            </div>
        </div>
    `,
    styleUrls : ['progressCircular.css']
})
export class ProgressCircular {

    
}