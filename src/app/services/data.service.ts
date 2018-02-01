import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {
  private value = new Subject<number>();

  constructor() {}

  setValue(currentValue: number, diff: number = 0): void {
    this.value.next(currentValue + diff);
  }

  getValue() {
    return this.value.asObservable();
  }
}
