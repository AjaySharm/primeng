import { Component, OnInit } from '@angular/core';
import {Navbar} from '../../../components/navbar/navbar';
import {Tabs} from '../../../components/tabs/tabsdemo';


@Component({
  
    selector: 'navbar',
   templateUrl: 'showcase/demo/navbar/navbar1.html',
      directives: [Navbar,Tabs]
    
})
export class Navbarcomponent {
  

    

}