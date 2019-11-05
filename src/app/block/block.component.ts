import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { config } from '../config';
import { blocksData } from '../json';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  block:any;
  
  @Input()
  set getBlock(v: any) {
    this.block = v
  }
  
  @Output() eventOutput:EventEmitter<any> = new EventEmitter<any>()
  constructor(private elementRef: ElementRef) {
    
  }

  ngOnInit() {
    
  }
}
