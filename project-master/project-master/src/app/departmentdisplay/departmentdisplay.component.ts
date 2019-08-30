import { Component, OnInit } from '@angular/core';
import { Dept } from './dept';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-departmentdisplay',
  templateUrl: './departmentdisplay.component.html',
  styleUrls: ['./departmentdisplay.component.css']
})
export class DepartmentdisplayComponent implements OnInit {
  name:string='';
  desc:string='';
  closeResult:string;
  msg = 'onDeptDelete';
  arrdept: Dept[] = [
   new Dept ('IT','ftyhtjg'),
   new Dept('nonIT','tdyhg')
  ];
  constructor(private modalService: NgbModal, private _router:Router) { }

  ngOnInit() {
  }

  // onClickAdd()
  // {
  //   this._router.navigate(['/adddept']);
  // }
  onClickEdit(item:Dept){
    this._router.navigate(['/editdept',item.name]);
  }

   onClickDelete(item:Dept){

    if (confirm("sure to delete")==true) {
    this.arrdept.splice(this.arrdept.indexOf(item),1);
      }
  }
  // modal
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // modal
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

 onAddDeptClick() {
   this.arrdept.push(new Dept(this.name, this.desc));
   alert('successfully added department');
   this.modalService.dismissAll();
 }

}
