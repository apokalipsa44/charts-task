import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  routerEventsSubscription$!: Subscription
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.routerEventsSubscription$ = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        distinctUntilChanged()
      ).subscribe(refresh => {
        let counter: number = (sessionStorage.getItem("refreshCounter")) ? parseInt(sessionStorage.getItem("refreshCounter")!) : 0;
        counter++;
        sessionStorage.setItem("refreshCounter", counter?.toString());
      })
  }

  ngOnDestroy(): void {
    this.routerEventsSubscription$?.unsubscribe();
  }

}
