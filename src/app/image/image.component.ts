import { Component, OnInit, Input } from '@angular/core';
import { WireframeService } from '../service/wireframe.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  i_val :any;
  j_val:any;
  block_name :any;
  msg = ''
  imageHide = true;
  @Input()
  set i(i: any) {
    this.i_val = i;
  }

  @Input()
  set j(j:any){
    this.j_val = j
  }
  @Input()
  set objectt(val: any) {
    this.block_name = val;
    console.log(this.block_name);
    
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
  response:any;

  eventHandler(x) {

    console.log(x)

    this.wireservie.fireevent(this.block_name)
  }

  getId() {
    return 'name'+ this.i_val + '' + this.j_val;
  }

  submitForm(params){
    console.log("in params", params, this.i_val, this.j_val)
    this.imageHide = false;
    this.msg = 'this was called'
    debugger
    if (params.x != undefined) {
      this.wireservie.fireevent(params)
    }
    // this.wireservie.fireevent(1, 1)
    // if (!(params.x) == undefined) {
    //   console.log('not')
    // }
  }

}
