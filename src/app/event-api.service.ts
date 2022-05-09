import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventApiService {

  // The base API url
  eventAPIUrl = "https://localhost:44380/api"

  constructor(private httpclient:HttpClient) { }

  // GET request that returns all events
  getAllEvents():Observable<any[]>{

    return this.httpclient.get<any>(this.eventAPIUrl + '/events')
  }

  // POST request that creates an event
  createEvent(event:any){
    return this.httpclient.post(this.eventAPIUrl + '/events',event)
  }

  // PUT request that edits an event
  editEvent(id:number, event:any){
      return this.httpclient.put(this.eventAPIUrl + `/events/${id}`,event)
    }

  // DELETE request that edits an event
  deleteEvent(id:number){
    return this.httpclient.delete(this.eventAPIUrl + `/events/${id}`)
  }
}
