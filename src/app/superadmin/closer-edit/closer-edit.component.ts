import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-closer-edit',
  templateUrl: './closer-edit.component.html',
  styleUrls: ['./closer-edit.component.css']
})
export class CloserEditComponent implements OnInit {

  constructor() { }
  titleDetail = ['Title', 'Title-1']
  statusActive = ['Active', 'Inactive'];
  ngOnInit(): void {
  }

}
