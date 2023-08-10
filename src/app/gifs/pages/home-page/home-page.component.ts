import { Component } from '@angular/core';
import { GifsServices } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  
  constructor(private gifServices : GifsServices){

  }

  get gifsList(): Gif[]{
    return this.gifServices.gifsList;
  }

}
