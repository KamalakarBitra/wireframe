import { Component, OnInit, Input } from '@angular/core';
import { WireframeService } from '../service/wireframe.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  i_val :any;
  j_val:any;
  showForm = false;
  block_name :any;
  msg = ''
  @Input()
  set i(i: any) {
    this.i_val = i;
  }

  @Input()
  set j(j:any){
    this.j_val = j
  }

  constructor( private wireservie :  WireframeService) { 
    this.wireservie.getDetails.subscribe(value => {
      // this.queue_list = value;
      console.log(value)
      if (value.x === this.i_val && value.y === this.j_val ) {
        this[value.func_name](value.param)
      }
    })
  }


  ngOnInit() {
  }
  formMsg

  eventHandler(event) {
    alert(this.i_val +'-'+this.j_val)
    this.wireservie.fireevent(this.block_name)

  }

  submitForm(params){
    console.log("in params", params, this.i_val, this.j_val)
    this.msg = 'this was called'
    debugger
    if (params.x != undefined) {
      this.wireservie.fireevent(params)
    }
  } 
  eventHandlertable(param) {
    debugger
    // this.wireservie.fireevent(0, 3)
    this.showForm = true;
    this.formMsg = 'Form Submited' 
    this.wireservie.fireevent(this.block_name)

  }

  getId() {
    return 'name'+ this.i_val + '' + this.j_val;
  }
}
