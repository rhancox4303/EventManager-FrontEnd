import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventApiService } from 'src/app/event-api.service';
import { CommunicatorService } from '../communicator.service';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.css']
})
export class ViewEventsComponent implements OnInit {

  eventList$!: Observable<any[]> 
  constructor(private eventService:EventApiService,private comService:CommunicatorService) { 
    this.comService.updatedListMessage.subscribe( message => {
      this.isEditModalActive = false
      this.updateList()
    })
  }

  ngOnInit(): void {
    this.updateList()  
  }

  event:any;
  isEditModalActive:boolean = false;

  closeModal(){
    this.isEditModalActive = false
  }

  activateViewEditModal(event:any){
    console.log('The new event')
    console.log(event)
    this.event = event
    this.isEditModalActive = true
  }

  deleteEvent(item:any){
    this.eventService.deleteEvent(item.id).subscribe( res =>
      this.updateList()  
    )
  }

  updateList(){
    this.eventList$ = this.eventService.getAllEvents()
  }
}
