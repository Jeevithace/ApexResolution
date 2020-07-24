import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-negotiators-edit',
  templateUrl: './negotiators-edit.component.html',
  styleUrls: ['./negotiators-edit.component.css']
})
export class NegotiatorsEditComponent implements OnInit {

  constructor() { }
  titleDetail = ['Title', 'Title-1']
  statusActive = ['Active', 'Inactive'];
  ngOnInit(): void {
  }

}
