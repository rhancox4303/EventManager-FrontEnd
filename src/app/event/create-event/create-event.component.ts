import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventApiService } from 'src/app/event-api.service';
import { CommunicatorService } from '../communicator.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  event:any={name: "",
    eventDate: null,
    eventLocation: "",
    summary: ""}

  constructor(private eventService:EventApiService,private comService:CommunicatorService) { }

  ngOnInit(): void {
  }

  createEvent(form:NgForm){
    
    var newEvent = {
      name: this.event.name,
      eventDate: this.event.eventDate,
      eventLocation: this.event.eventLocation,
      summary: this.event.summary
    }
    
    // Send a message to the View-events component to update it's list
    this.eventService.createEvent(newEvent).subscribe( res=> {
      this.comService.sendUpdatedList("Update List")
    })
    
    form.resetForm()
  }
}
