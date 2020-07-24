import { Component, OnInit } from '@angular/core';
import {ManagerService} from '../../service/manager.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-manager-list-edit',
  templateUrl: './manager-list-edit.component.html',
  styleUrls: ['./manager-list-edit.component.css']
})
export class ManagerListEditComponent implements OnInit {
 addManager:any = {};
 getManagerlist:any ={};
 id: any = {};
 updateManager : Boolean = false;
  constructor(private _manager_service: ManagerService , private route:Router, private activated_route:ActivatedRoute) { }

  ngOnInit(): void {
     this.id = this.activated_route.snapshot.queryParamMap.get('id');
    // let id = this._manager_service.getId();
    if(this.id !== null || undefined){
      this.updateManager=true;
      this._getManager_byId(this.id)
    }

  }


  _create_manager(){
if(this.updateManager){
  debugger;
  console.log(this.addManager)
  this.addManager.createdBy ="SuperAdmin";
  this._manager_service._update_manager(this.addManager).subscribe(data=>{
    console.log("update", data)
  })
}
else{
   this.addManager.createdBy ="SuperAdmin";
    this._manager_service._add_manager(this.addManager).subscribe(data=>{
      console.log("add", data)      
  })
}
  }

  _getManager_byId(id : number){
   this._manager_service._get_managerByid(id).subscribe((data: any) =>{
       console.log(data.data)
    this.addManager = data.data;
   })


  }

  
  

     
  
}
