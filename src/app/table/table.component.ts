import { Component, OnInit, Input } from '@angular/core';
import { WireframeService } from '../service/wireframe.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  i_val :any;
  j_val:any;
  showTable = false;
  @Input()
  set i(i: any) {
    this.i_val = i;
  }

  @Input()
  set j(j:any){
    this.j_val = j
  }

  constructor(private wireservie: WireframeService) { }

  ngOnInit() {
  }
  eventHandler(event, block_details) {
    alert(this.i_val +'-'+this.j_val)
    this.showTable = true;
  }

  getId() {
    return 'name'+ this.i_val + '' + this.j_val;
  }
}
