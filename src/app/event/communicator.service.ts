import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {

  // Create new subject used to alert the View-Event component it needs to update the list.
  updatedListMessage = new Subject()
  constructor() { }

  // Method used to send an alert using the subject notifying the View-Event component it needs to update the list.
  sendUpdatedList(message:string){
    this.updatedListMessage.next(message)
  }
}
