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

  // Observable that contains array of events.
  eventList!: Observable<any[]> 


  // Create the eventAPI and Communicator services
  constructor(private eventService:EventApiService,private comService:CommunicatorService) { 
    // Subscribe to the com service. When a message is sent reset editModal to false and update the list.
    this.comService.updatedListMessage.subscribe( message => {
      this.isEditViewModalActive = false
      this.updateList()
    })
  }

  // On Init update the list.
  ngOnInit(): void {
    this.updateList()  
  }

  // event used to hold the specific event that the edit, delete or view button is being press for.
  event:any;
  isEditViewModalActive:boolean = false;

  // Resets the isEditViewModalActive to false.
  closeModal(){
    this.isEditViewModalActive = false
  }

  // Activates the viewEditModal by setting isEditViewModalActive to true and assigning the passed in event.
  activateViewEditModal(event:any){
    this.event = event
    this.isEditViewModalActive = true
  }

  // Deletes the selected event using the eventService deleteEvent method.
  deleteEvent(event:any){
    this.eventService.deleteEvent(event.id).subscribe( res =>
      this.updateList()  
    )
  }

  // Update the eventList using the eventService method getAllEvents
  updateList(){
    this.eventList = this.eventService.getAllEvents()
  }
}
