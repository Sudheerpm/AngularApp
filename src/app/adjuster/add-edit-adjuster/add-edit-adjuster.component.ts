import { Component, OnInit, Input } from '@angular/core';
import { AdjusterService } from "src/app/adjuster.service";

@Component({
  selector: 'app-add-edit-adjuster',
  templateUrl: './add-edit-adjuster.component.html',
  styleUrls: ['./add-edit-adjuster.component.css']
})
export class AddEditAdjusterComponent implements OnInit {

  @Input() adjuster:any;
  id:string ="";
  adjuterId: string  = "";
  adjusterName:string ="";
  claimId: string ="";
  claimGroupId : string = "";

  constructor(private service: AdjusterService) { }

  ngOnInit(): void {
    this.id = this.adjuster.id;
    this.adjuterId = this.adjuster.adjuterId;
    this.adjusterName = this.adjuster.adjusterName;
    this.claimId = this.adjuster.claimId;
    this.claimGroupId = this.adjuster.claimGroupId;
  }

  addAdjuster(){
    var adjusterObject = {adjuterId:this.adjuterId,
      adjusterName:this.adjusterName,
      claimId:this.claimId,
      claimGroupId : this.claimGroupId
    }
      this.service.addAdjuster(adjusterObject).subscribe(res =>{
        alert(res.toString());
      })
  }

  updateAdjuster(){
    var val = {
      id :  this.id,
      adjuterId:this.adjuterId,
      adjusterName:this.adjusterName,
      claimId:this.claimId,
      claimGroupId : this.claimGroupId
    }
      this.service.updateAdjuster(val).subscribe(res =>{
        alert(res.toString());
    })
  }
}
