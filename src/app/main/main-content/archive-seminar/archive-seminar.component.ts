import { Seminar, SeminarService } from './../shared/seminars.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive-seminar',
  templateUrl: './archive-seminar.component.html',
  styleUrls: ['./archive-seminar.component.scss']
})
export class ArchiveSeminarComponent implements OnInit {

  public seminars:Seminar[];
  public yearlySeminars:any = [];

  constructor(private seminarService:SeminarService) { 
    this.seminars = this.seminarService.getSeminars();

    /// not working
    const self = this;
    this.seminars.forEach( (seminar) => {
      if (self.yearlySeminars[seminar.year] === undefined ) {
        self.yearlySeminars[seminar.year] = [seminar]
      } else {
        self.yearlySeminars[seminar.year].push(seminar);
      }
    })
    ///
  }

  ngOnInit() {
  }

}
