import { Injectable } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  _pageOneSubscriptions:Subscription[]=new Array() as Subscription[];
  _subjects:Subject<number>[]=new Array() as Subject<number>[];
  _counter:number=0;

  constructor() {
    this.createSubjects();
  }



  /**
   * Creates about 1000 rxjs subject(s)
   */
  createSubjects(){
    this._pageOneSubscriptions=new Array() as Subscription[];
    //create subjects
    for(let i=0;i<=1000;i++){
      let s=new Subject<number>();
      this._subjects.push(s);
      }
  }
  /**
   * Emits counter value for all the rxjs subjects created
   */
  emitCounters(){
    if(this._subjects){
      this._subjects.forEach((s:Subject<number>)=>{
        s.next(this._counter++);
      //  s.complete();
      });
    }
  }

  /**
   * Provides rxjs subjects array to allow subscribing to each rxjs counter subject
   */
  subscribeToCounters(){
    return this._subjects;
  }
}
