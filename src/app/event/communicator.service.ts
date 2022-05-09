import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {

  updatedListMessage = new Subject()
  constructor() { }

  sendUpdatedList(message:string){
    this.updatedListMessage.next(message)
  }
}
