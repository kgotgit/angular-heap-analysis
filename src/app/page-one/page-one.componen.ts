import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { CounterService } from '../counter/counter.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit,OnDestroy {


  _pageOneSubscriptions:Subscription[]=new Array() as Subscription[];
  _counterViewPlaceHolder:number;

  constructor(private counterService:CounterService) { }

  /**
   * Callback to initialize component resource
   */
  ngOnInit(): void {
    this.listenToCounters();
    this.counterService.emitCounters();
  }

  /**
   * Listen to Counters from counter service
   */
  listenToCounters(){
    this.counterService.subscribeToCounters().forEach((s:Subject<number>)=>{
     this._pageOneSubscriptions.push(s.pipe(
        tap((counter:number)=>{
          this._counterViewPlaceHolder=counter;
        })
      ).subscribe()) ;
    })
  }

  /**
   * Callback to cleanup resources while component is getting destroyed.
   */
  ngOnDestroy(): void {
    this._pageOneSubscriptions.forEach((s:Subscription)=>{
    s.unsubscribe();
    });
  }

}
