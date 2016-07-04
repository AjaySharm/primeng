

import { Component, OnInit, AfterViewInit } from '@angular/core';
import {NgIf} from '@angular/common';
import {NgClass} from '@angular/common';
import {BootFlatDatePicker} from '../../../components/bootflat-datepicker/bootflat-datepicker';


@Component({

    selector: 'date-demo',
    templateUrl: 'showcase/demo/datepicker/datepicker.html',
   
    directives: [NgClass,BootFlatDatePicker]

})

export class Datepickerdemo{
    
    
     // Date Picker //
    private myDatePickerOptions = {
        todayBtnTxt: 'Today',
        dateFormat: 'yyyy-mm-dd',
        firstDayOfWeek: 'mo',
        sunHighlight: true,
        height: '32px',
        width: "100%",
       
        showTextBox: true,

        CalWidth: '280px'
    };
    selectedDate: string = '';

    startDateSelected(event) {
        console.log(event.formatted);
    }


    // Date Picker //
    
}