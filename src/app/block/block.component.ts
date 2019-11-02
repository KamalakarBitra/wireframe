import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { config } from '../config';
import { blocksData } from '../json';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  blocks = [];
  
  @Input()
  set getBlock(v: any) {
    this.blocks = v
    // this.loadFunction(v)
    // this.called(v)
  }
  
  @Output() eventOutput:EventEmitter<any> = new EventEmitter<any>()
  
  img_src:any;
  fields = [];
  allBlocks = blocksData;

  constructor(private elementRef: ElementRef) {
    
  }

  ngOnInit() {
    
  }
  
  // loadFunction(x) {
  //   for (let i = 0; i < x.length; i++) {
  //     for (let j = 0; j < x[i].length; j++) {
  //       let methodName = x[i][j]['loadfunction']
  //       this[methodName](x[i][j]); // call it      
  //     }
  //   }
  // }
  
  getMethod(x) {
    let methodName = x['loadfunction']
    return this[methodName](x);
  }
  
  simpleimgload(e) {
    console.log(e);
    
    return 'assets/images/1.jpg'
  }
  
  simplefield(e) {
    // this.fields = e.fields
  }
  
  called(v) {
    let el = this.elementRef.nativeElement.querySelector('.main-box')
    el.onclick = this.clicked(v);
    
  }
  
  clicked(v) {
    console.log("Called", v);
  }
  
  
  getBlockWidth() {
    return 100 / config.columnsPerRow
  }

  event_handler(event, block_details) {
    if (block_details.events === event) {
      console.log(event, block_details, this.allBlocks[1][2])
      // debugger
      let fields = [
        {
          type: 'text',
          placeholder: 'Something here',
          label: 'First Input'
        }
      ]
      this.changeBlock(1, 2, 'fields', 'simplefield', { fields: fields})
      
    }
  }
  changeBlock(x, y, type, func, params) {
    this.allBlocks[x][y].loadfunction = func;
    this.allBlocks[x][y].type = type;
    if (type === 'fields') {
      this.allBlocks[x][y].fields = params.fields;
    }
    // if (type === 'image') {
    //   this.allBlocks[x][y].imgsrc = '.jpg'
    // }
    this.eventOutput.emit(['click', this.allBlocks])
  }
}
