import { Component,Input, OnInit } from '@angular/core';
import { EventApiService } from 'src/app/event-api.service';
import { CommunicatorService } from '../communicator.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  // Create the eventAPI and Communicator services.
  constructor(private eventService:EventApiService,private comService:CommunicatorService) { }

  // Use Input to get event and disableInput from View-Events component.
  @Input() event:any;
  @Input() disableInput!:boolean;

  name:string=""
  date: Date= new Date()
  location: string=""
  summary: string=""

  // Assign event properties to the ngModel variables.
  ngOnInit(): void {
    this.name = this.event.name
    this.date = this.event.eventDate
    this.location = this.event.eventLocation
    this.summary = this.event.summary
  }

  // Edit a new event using the eventService editEvent method.
  editEvent(){
    var changedEvent = {
      id: this.event.id,
      name: this.name,
      eventDate: this.date,
      eventLocation: this.location,
      summary: this.summary
    }

    this.eventService.editEvent(this.event.id,changedEvent).subscribe( res=> {
      // Use the comServiec to notify the View-Events to update the list.
      this.comService.sendUpdatedList("Update List")

      // Click the close Modal Button
      var modalCloseButton = document.getElementById("modalCloseButton");
      if(modalCloseButton){
        modalCloseButton.click();
      }
    })
  }
}
