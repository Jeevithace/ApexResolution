import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assitnegotiators-edit',
  templateUrl: './assitnegotiators-edit.component.html',
  styleUrls: ['./assitnegotiators-edit.component.css']
})
export class AssitnegotiatorsEditComponent implements OnInit {

  constructor() { }
  titleDetail = ['Title', 'Title-1']
  statusActive = ['Active', 'Inactive'];
  ngOnInit(): void {
  }

}
