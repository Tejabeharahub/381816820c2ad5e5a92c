import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class PollServiceService {

  constructor(private httpClient: HttpClient) { }

  getPollList(){
    return this.httpClient.get("https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0").pipe(map((polls:any)=>{
        return polls;
    }))
  }
}
