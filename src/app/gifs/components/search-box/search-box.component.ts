import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsServices } from '../../services/gifs.service';

@Component({
    selector: 'gifs-search-box',
    template : `
    <h5> Buscar:</h5>
    <input type="text"
    class="form-control"
    placeholder="Buscar gifs ..."
    (keyup.enter)="searchTag( )"
    #txtTagInput
    >
     `
})

export class SearchBoxComponent implements OnInit {
    @ViewChild('txtTagInput')
    public tagInput! : ElementRef<HTMLInputElement >;

    constructor( private giftsService : GifsServices) { }

    ngOnInit() { }


    searchTag(){
        const newTag = this.tagInput.nativeElement.value;
        this.giftsService.searchTag(newTag);
        this.tagInput.nativeElement.value="";

        console.log(newTag);
        
        
    }
}