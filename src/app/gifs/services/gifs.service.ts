import { Injectable } from '@angular/core';
import {HttpClient  } from "@angular/common/http";
import { HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';
@Injectable({providedIn: 'root'})
export class GifsServices {

    public gifsList :       Gif[]=[];
    private _tagsHistory :  string[]=[]
    private apiKey :        string = 'hbwCpvRoKOwIf9VHXp0JFPeFWkuoiZq7';
    private servicesURL :   string ='https://api.giphy.com/v1/gifs'


    constructor(private http: HttpClient) { 
        this.loadLocal();
    }

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
        this.saveLocalStorage();
    }

    private saveLocalStorage(){
        localStorage.setItem('history', JSON.stringify(this.tagsHistory) )
    }

    private loadLocal(){
        if(!localStorage.getItem('history')) return
        this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
        if(this._tagsHistory.length===0) return
        this.searchTag(this._tagsHistory[0])
    }

    searchTag(tag : string ){
        if(tag.length===0) return

        this.organizeHistory(tag)
         
        const params = new HttpParams()
            .set('api_key', this.apiKey)
            .set('limit', '10')
            .set('q',tag)         

            


        this.http.get<SearchResponse>(`${this.servicesURL}/search`, {params})
        .subscribe(res => {
            this.gifsList = res.data
            console.log({gifs : this.gifsList});
            
        })
    }

   

   
    
}