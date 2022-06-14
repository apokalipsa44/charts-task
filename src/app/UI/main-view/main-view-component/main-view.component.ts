import { Component, OnInit } from '@angular/core';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  isBackgrounVisible: boolean = false;

  constructor(private userService: RandomUserService) { }

  ngOnInit(): void {
    let counter: number = (sessionStorage.getItem("refreshCounter")) ? parseInt(sessionStorage.getItem("refreshCounter")!) : 0;
    if (counter % 5 === 0) this.isBackgrounVisible = true;
  }

  fetchUsers(): void {
    this.userService.handleFetchUsersBtnClick();
  }

}
