import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isBackgrounVisible = false

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        distinctUntilChanged()
      ).subscribe(refresh => {
        let counter: number = (sessionStorage.getItem("refreshCounter")) ? parseInt(sessionStorage.getItem("refreshCounter")!) : 0;
        counter++;
        sessionStorage.setItem("refreshCounter", counter?.toString());
        if (counter % 5 === 0) this.isBackgrounVisible = true;
      })
  }
}
