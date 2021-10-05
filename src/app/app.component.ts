import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = 0;
  updateAt?: number;

  getCannotDecrease(): boolean {
    return this.counter <= 0;
  }

  increase(): void {
    this.updateAt = Date.now();
    this.counter++;
  }

  decrease(): void {
    this.updateAt = Date.now();
    this.counter--;
  }

  clear(): void {
    this.updateAt = Date.now();
    this.counter = 0;
  }
}
