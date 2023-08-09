import { Injectable } from '@angular/core';
import {HttpClient  } from "@angular/common/http";
import { HttpParams } from '@angular/common/http';
@Injectable({providedIn: 'root'})
export class GifsServices {

    private _tagsHistory : string[]=[]
    private apiKey : string = 'dGMJW12nlHSz4603sy81BZFryoPshmUK';
    private servicesURL : string ='https://api.giphy.com/v1/gifs/'


    constructor(private http: HttpClient) { }

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


    async searchTag(tag : string ){
        if(tag.length===0) return

        this.organizeHistory(tag)
         
        const params = new HttpParams()
            .set('api_key', this.apiKey)
            .set('limit', '10')
            .set('q',tag)         

            


        this.http.get(`${this.servicesURL}search`, {params})
        .subscribe(res => {
            console.log(res);
            
        })
    }

   

   
    
}