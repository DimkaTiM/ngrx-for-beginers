import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {clear, countSelector, decrease, increase} from "./reducers/counter";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  updateAt?: number;
  count$ = this.store.select(countSelector);
  cannotDecrease$ = this.count$.pipe(map(count => count <= 0));

  constructor(private store: Store
  ) {
  }

  getCannotDecrease()
    :
    boolean {
    return false;
  }

  increase()
    :
    void {
    this.updateAt = Date.now();
    this.store.dispatch(increase());
  }

  decrease()
    :
    void {
    this.updateAt = Date.now();
    this.store.dispatch(decrease());
  }

  clear()
    :
    void {
    this.updateAt = Date.now();
    this.store.dispatch(clear());
  }
}
