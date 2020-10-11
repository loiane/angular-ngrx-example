import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  searchQuery = '';
  // cartCount$: Observable<number>;
  destroySub = new Subject();

  constructor() { }

  ngOnInit(): void {
  }

  watchSearch(): void {
    of(this.searchQuery)
      .pipe(
        map(value => value.trim()),
        filter(query => query.length > 3),
        debounceTime(2000),
        distinctUntilChanged(),
        takeUntil(this.destroySub)
      )
      .subscribe(query => console.log(query));
  }

  ngOnDestroy(): void {
    this.destroySub.next(true);
    this.destroySub.complete();
  }

}
