import {Component} from '@angular/core';
import {Newpaginator} from '../../../components/paginatornew/paginatornew';
import {CodeHighlighter} from '../../../components/codehighlighter/codehighlighter';
import {TabView} from '../../../components/tabview/tabview';
import {TabPanel} from '../../../components/tabview/tabpanel';
import {Button} from '../../../components/button/button';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    templateUrl: 'showcase/demo/paginatordemo/paginatordemo.html',
    directives: [Newpaginator,TabPanel,TabView,Button,CodeHighlighter,ROUTER_DIRECTIVES]
})
export class PaginatorComponent {

}