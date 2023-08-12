import { NodeWithI18n } from '@angular/compiler';
import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lazyimagen',
  templateUrl: './lazyimagen.component.html',
  styleUrls: ['./lazyimagen.component.css']
})
export class LazyimagenComponent implements OnInit{

  @Input()
  public url!: string 

  @Input()
  public alt!: string 

  public hasLoaded : boolean = false;

  ngOnInit(): void {
      if(!this.url) throw new Error("Url property is  required")
  }

  onLoadn(){
    setTimeout(()=>{
      this.hasLoaded= true

    },1000)
    
  }
}
