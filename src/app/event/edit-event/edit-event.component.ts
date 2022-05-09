import { Component,Input, OnInit } from '@angular/core';
import { EventApiService } from 'src/app/event-api.service';
import { CommunicatorService } from '../communicator.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  constructor(private eventService:EventApiService,private comService:CommunicatorService) { }

  @Input() event:any;
  @Input() disableInput!:boolean;
  id: number = -1;
  name:string=""
  date: Date= new Date()
  location: string=""
  summary: string=""

  ngOnInit(): void {
    this.id = this.event.id
    this.name = this.event.name
    this.date = this.event.eventDate
    this.location = this.event.eventLocation
    this.summary = this.event.summary
  }

  editEvent(){
    console.log(this.disableInput)
    var changedEvent = {
      id: this.event.id,
      name: this.name,
      eventDate: this.date,
      eventLocation: this.location,
      summary: this.summary
    }

    this.eventService.editEvent(this.event.id,changedEvent).subscribe( res=> {
      this.comService.sendUpdatedList("Update List")
    var modalCloseButton = document.getElementById("modalCloseButton");
    if(modalCloseButton){
      modalCloseButton.click();
    }
    })
  }
}
