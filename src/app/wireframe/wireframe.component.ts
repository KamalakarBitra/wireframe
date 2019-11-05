import { Component, OnInit } from '@angular/core';
import { blocksData } from '../json';
import { config } from '../config';
import { WireframeService } from '../service/wireframe.service';

@Component({
  selector: 'app-wireframe',
  templateUrl: './wireframe.component.html',
  styleUrls: ['./wireframe.component.scss']
})
export class WireframeComponent implements OnInit {

  constructor(  private wireservie :  WireframeService ) {}
   
  // blocks = [];
  defaultdotArr = []
  ngOnInit() {
    // this.blocks = blocksData
    for (let i = 0; i < config.columnsPerRow; i++) {
      this.defaultdotArr.push(i);            
    }
    // setTimeout(() => {
    //   this.getConsole()
    // }, 1000);
  }
  
  getBlockWidth() {
    return 100 / config.columnsPerRow
  }

  
  getConsole() {
    document.getElementById('name00').click()
  }
  
  getOutput(e) {
    // this.blocks = e[1]
  }

  getblock(i, j){
    return [i, j, this.wireservie.getBlock(i,j)];
  }
}
