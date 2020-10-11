import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit, OnDestroy {

  searchQuery = '';
  private destroySub = new Subject();

  constructor() { }

  ngOnInit(): void { }

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
