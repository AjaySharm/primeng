import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Lbutton} from '../../../components/buttons/buttons';
import {NgIf} from '@angular/common';
import {NgClass} from '@angular/common';
@Component({

    selector: 'cal-demo',
    templateUrl: 'showcase/demo/caldemo/caldemo.html',
    styleUrls:['showcase/demo/caldemo/caldemo.css'],
    directives: [Lbutton,NgClass]

})
export class calandarcomponent implements OnInit{
    
    year: boolean = false;
    month: boolean = false;
    week: boolean = false;
    day: boolean = true;
    days:Array<any>=[];
    weekdays:Array<any>=[];
    years:Array<any>=[];
    
    constructor() { }
    
   ngOnInit(){
        this.year = false;
        this.month = false;
        this.week = false;
        this.day = true;
    }
    getyear(){
         this.year = true;
        this.month = false;
        this.week = false;
        this.day = false;
        
    }
    getmonth() {
        this.year = false;
        this.month = true;
        this.week = false;
        this.day = false;
    }
    getweek() {
        this.year = false;
        this.month = false;
        this.week = true;
        this.day = false;
    }
    getday() {
        this.year = false;
        this.month = false;
        this.week = false;
        this.day = true;
    }
    
    save(week,flag){
        console.log(week,flag)
        if(flag){			
			this.weekdays.push(week)
		}
		else{			
	        let indexArray = this.weekdays.indexOf(week);
			   if (indexArray > -1) {
					this.weekdays.splice(indexArray, 1);
			   }
		}
    }
    
    savedays(day,flag){
           console.log(day,flag)
        if(flag){			
			this.days.push(day)
		}
		else{			
	        let indexArray = this.days.indexOf(day);
			   if (indexArray > -1) {
					this.days.splice(indexArray, 1);
			   }
		}
    }
    saveyear(year,flag){
         console.log(year,flag)
        if(flag){			
			this.years.push(year)
		}
		else{			
	        let indexArray = this.years.indexOf(year);
			   if (indexArray > -1) {
					this.years.splice(indexArray, 1);
			   }
		}
    }
    
    
}

