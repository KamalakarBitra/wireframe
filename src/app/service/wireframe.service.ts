import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';
import { Subscription, Subject } from 'rxjs';
import { every } from 'rxjs/operators';
import { blocksData } from '../json';

@Injectable({
  providedIn: 'root'
})
export class WireframeService {

  constructor() { }
  getDetails: Subject<any> = new Subject(); 

  getBlock(x,y){
    return blocksData[x][y]
  }

  fireevent(obj){
    this.getDetails.next(obj)
  }
}
