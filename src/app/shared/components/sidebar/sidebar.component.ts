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

  constructor( private gifServices: GifsServices){}


  get tagsList(){
    return this.gifServices.tagsHistory
  }

  
}

