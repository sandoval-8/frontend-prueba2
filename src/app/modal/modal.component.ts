import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  ngOnInit(): void {
  }

  isActivated:boolean = false;

  isDisabled:boolean = false;

  modal(){
    if(this.isActivated){
      this.isActivated=false;
      this.isDisabled=false;
    }else {
      this.isActivated=true;
      this.isDisabled=true;
    }
  }

}
