import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsServices {

    private _tagsHistory : string[]=[]
    private apiKey : string = 'dGMJW12nlHSz4603sy81BZFryoPshmUK'


    constructor() { }

    get tagsHistory(){
        return [...this._tagsHistory];
    }

    private organizeHistory(tag : string){
        tag = tag.toLowerCase();
        
        if(this.tagsHistory.includes(tag)){
            this._tagsHistory = this.tagsHistory.filter((oldtag) => oldtag !== tag)
        }

        this._tagsHistory.unshift(tag);
        this._tagsHistory = this.tagsHistory.splice(0,10)
    }


    searchTag(tag : string ){
        if(tag.length===0) return

        this.organizeHistory(tag)

    }

   

   
    
}