import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/service/manager.service';
@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css']
})
export class ManagerListComponent implements OnInit {
  listOfManager : any;
  deleteData:any;
  constructor(private managerService : ManagerService) { }

  ngOnInit(): void {
    this._getManager_records();
  }

  _getManager_records() {
    this.managerService._get_All_manager().subscribe((data: any)=>
      {
      this.listOfManager = data['data'];
      console.log(this.listOfManager)
      })
  }

  setId(data :any){
    this.deleteData =  data;
  }
  _delete_manager(){
   
    this.managerService._delete_manager( this.deleteData).subscribe(deleteData =>{
       console.log(deleteData)
       this._getManager_records()
    })


  }


  // sample(id: number){
  //   this.managerService.setId(id);
  // }


}
