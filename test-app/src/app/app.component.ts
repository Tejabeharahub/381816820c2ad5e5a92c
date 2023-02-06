import { Component, OnInit } from '@angular/core';
import { PollServiceService } from './poll-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-app';
  polls:any[]=[];
  first = 0;
  selectedProduct1: any;
  rows = 10;
  displayPollDetails:boolean=false;
  pollData:any;
  constructor(private pollServiceService:PollServiceService){}


  ngOnInit(){
    this.getPolls();
  }

  getPolls(){
    this.pollServiceService.getPollList().subscribe((pollsData)=>{
      this.polls = pollsData.hits;
    })
  }

  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}

isLastPage(): boolean {
    return this.polls ? this.first === (this.polls.length - this.rows): true;
}

isFirstPage(): boolean {
    return this.polls ? this.first === 0 : true;
}

onRowSelect(event:any) {
  // alert(1)
  // console.log(event)
  // console.log(this.selectedProduct1)
  // this.messageService.add({severity:'info', summary:'Product Selected', detail: event.data.name});
}

getPollDetails(poll : any){
  this.displayPollDetails=true;
  this.pollData = poll;
}
}
