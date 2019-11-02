import { Component } from '@angular/core';
import { blocksData } from './json';
import { config } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  blocks = [];
  defaultdotArr = []
  ngOnInit() {
    this.blocks = blocksData
    for (let i = 0; i < config.columnsPerRow; i++) {
      this.defaultdotArr.push(i);            
    }
  }
  
  getBlockWidth() {
    return 100 / config.columnsPerRow
  }
  
  getOutput(e) {
    this.blocks = e[1]
  }
}
