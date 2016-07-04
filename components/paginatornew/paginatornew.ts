import {Component,ElementRef,Input,Output,SimpleChange,EventEmitter} from '@angular/core';

@Component({
    selector: 'pn-paginator',
    templateUrl:'components/paginatornew/paginatornew.html'
       
    
})
export class Newpaginator {

    @Input() rows: number = 0;

    @Input() first: number = 0;

    @Input() pageLinkSize: number = 5;

    @Output() onPageChange: EventEmitter<any> = new EventEmitter();

    @Input() style: any;

    @Input() styleClass: string;
    
    @Input() rowsPerPageOptions: number[];

    pageLinks: number[];

    _totalRecords: number = 0;

    @Input() get totalRecords(): number {
        return this._totalRecords;
    }

    set totalRecords(val:number) {
        this._totalRecords = val;
        this.updatePageLinks();
    }

    isFirstPage() {
        return this.getPage() === 0;
    }

    isLastPage() {
        return this.getPage() === this.getPageCount() - 1;
    }

    getPageCount() {
        return Math.ceil(this.totalRecords/this.rows)||1;
    }

    calculatePageLinkBoundaries() {
        let numberOfPages = this.getPageCount(),
        visiblePages = Math.min(this.pageLinkSize, numberOfPages);

        //calculate range, keep current in middle if necessary
        let start = Math.max(0, Math.ceil(this.getPage() - ((visiblePages) / 2))),
        end = Math.min(numberOfPages - 1, start + visiblePages - 1);

        //check when approaching to last page
        var delta = this.pageLinkSize - (end - start + 1);
        start = Math.max(0, start - delta);

        return [start, end];
    }

    updatePageLinks() {
        this.pageLinks = [];
        let boundaries = this.calculatePageLinkBoundaries(),
        start = boundaries[0],
        end = boundaries[1];

        for(let i = start; i <= end; i++) {
            this.pageLinks.push(i + 1);
        }
    }

    changePage(p :number) {
        var pc = this.getPageCount();

        if(p >= 0 && p < pc) {
            this.first = this.rows * p;
            var state = {
                first: this.first,
                rows: this.rows,
                pageCount: pc
            };
            this.updatePageLinks();
          
            this.onPageChange.emit(state);
        }

    }
    
    getPage(): number {
        return Math.floor(this.first / this.rows);
      
    }

    changePageToFirst() {
        this.changePage(0);
    }

    changePageToPrev() {
        this.changePage(this.getPage() - 1);
    }

    changePageToNext() {
        this.changePage(this.getPage()  + 1);
    }

    changePageToLast() {
        this.changePage(this.getPageCount() - 1);
    }
    
    onRppChange(event) {
        this.rows = this.rowsPerPageOptions[event.target.selectedIndex];
        this.changePageToFirst();
    }
}
