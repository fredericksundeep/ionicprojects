import { Component } from '@angular/core';


import {PeopleService} from '../../providers/people-service/people-service';

@Component({
  templateUrl: 'modal.html',
  providers: [PeopleService]
})

export class ModalPage {
  public people: any;

  constructor(public peopleService: PeopleService){
this.loadPeople();
  }


 loadPeople(){
    this.peopleService.load()
    .then(data => {
      this.people = data;
    });
  }

}
