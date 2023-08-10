import { Component, OnInit } from '@angular/core';
import { GifsServices } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  ngOnInit() {
    
   }

  constructor( private giftsService: GifsServices){}

  againList(tag: any){
    const newTag = tag;
        this.giftsService.searchTag(newTag);
        tag="";

        console.log(newTag);
    
  }

  get tagsList(){
    return this.giftsService.tagsHistory
  }

  
}

