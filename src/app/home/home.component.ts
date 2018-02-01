import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentValue: number;
  newValue: number;

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getValue()
      .subscribe(value => {
        this.currentValue = value;
      });

    this.dataService.setValue(200);
  }

  setValue() {
    let iterations = 55;
    const diff = (this.newValue - this.currentValue);
    const part = diff / iterations;
    const current = this.currentValue;

    const interval = setInterval(() => {
      iterations--;
      this.dataService.setValue(current, diff - (part * iterations));
      if (iterations === 0) {
        clearInterval(interval);
      }
    }, 15);
  }
}
