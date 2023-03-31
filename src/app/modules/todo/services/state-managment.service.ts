import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateManagmentService {
  private stateKey = 'todoAppState';

  private stateSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  states$ = this.stateSubject.asObservable();

  constructor() {
    this.loadState();
  }

  loadState() {
    const stateJSON = localStorage.getItem(this.stateKey);
    if (stateJSON) {
      this.stateSubject.next(JSON.parse(stateJSON));
    }
  }

  saveState(state: any) {
    const stateJSON = JSON.stringify(state);
    localStorage.setItem(this.stateKey, stateJSON);
    this.stateSubject.next(state);
  }
}
