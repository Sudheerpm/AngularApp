import { Component, OnInit, Input } from '@angular/core';
import { AdjusterService } from "src/app/adjuster.service";

@Component({
  selector: 'app-show-adjuster',
  templateUrl: './show-adjuster.component.html',
  styleUrls: ['./show-adjuster.component.css']
})

export class ShowAdjusterComponent implements OnInit {
  adjusterList:any = [];
  modalTitle:any;
  activateAddEditAdjusterCom:boolean = false;
  adjuster:any;

  constructor(private adjusterService: AdjusterService) { }

  ngOnInit(): void {
    this.refreshAdjusterList();
  }

  refreshAdjusterList() {
    this.adjusterService.getAdjusterList().subscribe(data =>{
      this.adjusterList = data;
    });
  }

  AddAdjuster(){
    this.adjuster={
      id :"",
      adjuterId:"",
      adjusterName:"",
      claimId:"",
      claimGroupId: ""
    }
    this.modalTitle = "Add Adjuster";
    this.activateAddEditAdjusterCom = true;
  }

  EditAdjuster(item: any){
    this.adjuster = item;
    this.activateAddEditAdjusterCom = true;
    this.modalTitle = "Update Adjuster";
  }

  deleteClick(adjuterId: any){
    if(confirm('Are you sure??')){
      this.adjusterService.deleteAdjuster(adjuterId).subscribe(data =>{
        alert(data.toString());
        this.refreshAdjusterList();
      })
    }
  }

  closeClick(){
    this.activateAddEditAdjusterCom=false;
    this.refreshAdjusterList();
  }
}
